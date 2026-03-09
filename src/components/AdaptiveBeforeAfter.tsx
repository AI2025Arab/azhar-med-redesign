"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
    beforeSrc: string;
    afterSrc: string;
    alt: string;
    delimiterColor?: string;
};

function loadImageRatio(src: string): Promise<{ width: number; height: number; ratio: number }> {
    return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.decoding = "async";
        img.onload = () => {
            const width = img.naturalWidth || 1;
            const height = img.naturalHeight || 1;
            resolve({ width, height, ratio: height / width });
        };
        img.onerror = reject;
        img.src = src;
    });
}

export default function AdaptiveBeforeAfter({ beforeSrc, afterSrc, alt, delimiterColor = "#0F766E" }: Props) {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const [split, setSplit] = useState(50);
    const [beforeRatio, setBeforeRatio] = useState<number | null>(null);
    const [afterRatio, setAfterRatio] = useState<number | null>(null);
    const [containerHeight, setContainerHeight] = useState<number | null>(null);
    const [beforeError, setBeforeError] = useState(false);
    const [afterError, setAfterError] = useState(false);

    const maxRatio = useMemo(() => {
        const br = beforeRatio ?? 0;
        const ar = afterRatio ?? 0;
        return Math.max(br, ar);
    }, [beforeRatio, afterRatio]);

    useEffect(() => {
        let cancelled = false;

        (async () => {
            try {
                const [b, a] = await Promise.all([loadImageRatio(beforeSrc), loadImageRatio(afterSrc)]);
                if (cancelled) return;
                setBeforeRatio(b.ratio);
                setAfterRatio(a.ratio);
            } catch {
                // Keep ratios null; layout will still render with a safe height.
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [beforeSrc, afterSrc]);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        const recompute = () => {
            const width = el.clientWidth || 1;
            const ratio = maxRatio || 9 / 16; // safe fallback for portrait-heavy content
            const desired = Math.round(width * ratio);
            // Keep the frame professional on all screens while still showing full image (contain).
            const capped = Math.min(desired, Math.round(window.innerHeight * 0.78));
            setContainerHeight(capped);
        };

        recompute();

        const ro = new ResizeObserver(() => recompute());
        ro.observe(el);
        window.addEventListener("resize", recompute);

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", recompute);
        };
    }, [maxRatio]);

    const overlayStyle = useMemo(
        () => ({ clipPath: `inset(0 ${100 - split}% 0 0)` }),
        [split]
    );

    return (
        <div ref={wrapperRef} className="relative w-full bg-[#0B0B0C] border border-[#0B0B0C] overflow-hidden">
            <div
                className="relative w-full"
                style={{
                    height: containerHeight ? `${containerHeight}px` : "min(70vh, 640px)",
                }}
            >
                {/* Base: BEFORE (original) */}
                {!beforeError ? (
                    <Image
                        src={beforeSrc}
                        alt={alt}
                        fill
                        priority={false}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 1280px"
                        className="object-contain object-center"
                        onError={() => setBeforeError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-[#888888]">
                        تعذر تحميل صورة (قبل)
                    </div>
                )}

                {/* Overlay: AFTER (redesign) */}
                <div className="absolute inset-0" style={overlayStyle} aria-hidden="true">
                    {!afterError ? (
                        <Image
                            src={afterSrc}
                            alt={alt}
                            fill
                            priority={false}
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 1280px"
                            className="object-contain object-center"
                            onError={() => setAfterError(true)}
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-xs text-[#888888]">
                            تعذر تحميل صورة (بعد)
                        </div>
                    )}
                </div>

                {/* Delimiter */}
                <div
                    className="absolute top-0 bottom-0 w-[2px]"
                    style={{
                        left: `${split}%`,
                        transform: "translateX(-1px)",
                        backgroundColor: delimiterColor,
                    }}
                    aria-hidden="true"
                />

                {/* Handle */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-white/10 bg-[#1F1F22]/80 backdrop-blur-md flex items-center justify-center"
                    style={{ left: `${split}%`, transform: "translate(-50%, -50%)" }}
                    aria-hidden="true"
                >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: delimiterColor }} />
                </div>

                {/* Input */}
                <input
                    aria-label="Before/After slider"
                    type="range"
                    min={0}
                    max={100}
                    value={split}
                    onChange={(e) => setSplit(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize"
                />
            </div>
        </div>
    );
}

