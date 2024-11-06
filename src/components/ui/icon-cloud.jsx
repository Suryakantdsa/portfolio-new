"use client";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import { useId } from "react";

export const getCloudProps = (canvasId) => ({
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
    containerId: `canvas-container-${canvasId}`,
    canvasId: `canvas-${canvasId}`,
  },
});

export const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

const IconCloudWrapper = ({ iconSlugs }) => {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState(null);
  const { theme } = useTheme();
  const canvasId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  if (!mounted) return null;

  return (
    // @ts-ignore
    <Cloud {...getCloudProps(canvasId)}>{renderedIcons}</Cloud>
  );
};

// Dynamic import with no SSR
import dynamic from "next/dynamic";

const IconCloud = dynamic(() => Promise.resolve(IconCloudWrapper), {
  ssr: false,
});

export default IconCloud;
