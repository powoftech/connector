declare module 'tailwindcss/lib/util/flattenColorPalette' {
  /**
   * Flattens a nested color palette object
   * @param colors The color palette object to flatten
   */
  export default function flattenColorPalette(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    colors: Record<string, any>,
  ): Record<string, string>
}
