# Chop Chop React migration plan

1. Update Vite config to include React and Tailwind plugins.
2. Add the React JSX setting to tsconfig while preserving all existing options.
3. Create the React header component from the existing HTML markup without drawer behavior.
4. Create the app shell and mount it via React entry point.
5. Replace the old HTML body with the Vite React root and remove the vanilla main entry.
6. Run the Vite dev server to verify the project boots.
