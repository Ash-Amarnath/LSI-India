import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import "leaflet/dist/leaflet.css";

interface Region {
  name: string;
  lat: number;
  lng: number;
  status: "active" | "planned";
}

const IndiaMap = () => {
  const [ref, inView] = useInView();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    import("leaflet").then((L) => {
      const map = L.map(mapRef.current!, {
        center: [22.5, 78.5],
        zoom: 5,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      mapInstance.current = map;

      // Load coverage data
      fetch("/data/coverage.json")
        .then((r) => r.json())
        .then((data: { regions: Region[] }) => {
          data.regions.forEach((region) => {
            const isActive = region.status === "active";

            // Pulsing circle marker
            const circle = L.circleMarker([region.lat, region.lng], {
              radius: isActive ? 10 : 7,
              fillColor: isActive ? "#2d6a4f" : "#e07a2f",
              color: isActive ? "#1b4332" : "#c45e1a",
              weight: 2,
              opacity: 1,
              fillOpacity: 0.8,
            }).addTo(map);

            // Outer pulse ring for active
            if (isActive) {
              L.circleMarker([region.lat, region.lng], {
                radius: 18,
                fillColor: "#2d6a4f",
                color: "#2d6a4f",
                weight: 1,
                opacity: 0.3,
                fillOpacity: 0.1,
              }).addTo(map);
            }

            circle.bindPopup(
              `<div style="text-align:center;font-family:sans-serif;">
                <strong style="font-size:14px;">${region.name}</strong><br/>
                <span style="color:${isActive ? '#2d6a4f' : '#e07a2f'};font-weight:600;font-size:12px;">
                  ${isActive ? "● Currently Active" : "◌ Planned"}
                </span>
              </div>`
            );
          });
        })
        .catch(() => {});

      // Fix map rendering after container is visible
      setTimeout(() => map.invalidateSize(), 300);
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <section id="map" ref={ref} className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Where We're Making an Impact
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each glowing dot represents a region where LSI volunteers are actively documenting real living conditions on the ground.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div
            ref={mapRef}
            className="w-full rounded-2xl overflow-hidden border border-border shadow-xl"
            style={{ height: "500px" }}
          />

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
              <span className="text-sm text-muted-foreground">Active Region</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-sm text-muted-foreground">Planned</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndiaMap;
