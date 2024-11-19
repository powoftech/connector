declare module "tailwindcss/lib/util/flattenColorPalette" {
  /**
   * Flattens a nested color palette object
   * @param colors The color palette object to flatten
   */
  export default function flattenColorPalette(
    colors: Record<string, any>
  ): Record<string, string>;
}
