import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export function SplineScene() {
  return (
    <div className="absolute inset-0">
      <Suspense fallback={<div className="absolute inset-0 bg-hero-bg" />}>
        <Spline scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode" />
      </Suspense>
    </div>
  );
}
