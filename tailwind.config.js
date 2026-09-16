tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            navy: {
              950: '#060b14',
              900: '#0a1224',
              850: '#0e1a32',
              800: '#132342',
              700: '#1b325c',
              600: '#25447a',
            },
            cyan: {
              300: '#67e8f9',
              400: '#22d3ee',
              500: '#06b6d4',
              900: '#164e63',
            },
            hazard: {
              low: '#10b981',
              mod: '#f59e0b',
              high: '#ef4444',
              ri: '#dc2626',
            }
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
          }
        }
      }
    }
