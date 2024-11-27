const ICONS = {
  "fe": "M1.52 18.66c-0.14,0 -0.26,-0.05 -0.36,-0.15 -0.1,-0.1 -0.15,-0.22 -0.15,-0.36l0 -12.21c0,-0.14 0.05,-0.26 0.15,-0.36 0.1,-0.1 0.22,-0.15 0.36,-0.15l9.53 0c0.14,0 0.26,0.05 0.36,0.15 0.1,0.1 0.15,0.22 0.15,0.36l0 2.87c0,0.14 -0.05,0.26 -0.15,0.36 -0.1,0.1 -0.22,0.15 -0.36,0.15l-5.41 0 0 1.4 5.03 0c0.14,0 0.26,0.05 0.36,0.15 0.1,0.1 0.15,0.22 0.15,0.36l0 2.86c0,0.14 -0.05,0.26 -0.15,0.36 -0.1,0.1 -0.22,0.15 -0.36,0.15l-5.03 0 0 3.55c0,0.14 -0.05,0.26 -0.15,0.36 -0.1,0.1 -0.22,0.15 -0.36,0.15l-3.61 0zm5.06 -12.35c-0.22,-0.02 -0.39,-0.01 -0.51,0.02 -0.11,0.04 -0.22,0.16 -0.32,0.36 -0.1,0.2 -0.12,0.36 -0.07,0.48 0.05,0.11 0.15,0.24 0.32,0.39 0.17,0.17 0.32,0.28 0.43,0.34 0.12,0.07 0.28,0.04 0.49,-0.07 0.23,-0.13 0.36,-0.25 0.38,-0.38 0.03,-0.13 0.02,-0.32 -0.03,-0.57 -0.04,-0.21 -0.11,-0.35 -0.21,-0.42 -0.1,-0.07 -0.26,-0.12 -0.48,-0.15zm-4.44 0.53c0,-0.08 0,-0.15 0,-0.2 0,-0.05 -0.04,-0.09 -0.13,-0.12 -0.17,-0.05 -0.29,0 -0.38,0.14 -0.06,0.08 -0.1,0.16 -0.11,0.21 -0.02,0.06 0.01,0.13 0.07,0.22 0.13,0.15 0.28,0.2 0.46,0.13 0.08,-0.04 0.12,-0.09 0.11,-0.15 -0.01,-0.06 -0.02,-0.14 -0.02,-0.23zm8.15 -0.09c-0.06,0 -0.1,0.02 -0.11,0.06 -0.01,0.03 -0.03,0.08 -0.06,0.13 -0.02,0.06 -0.05,0.11 -0.07,0.15 -0.03,0.04 -0.02,0.08 0.03,0.13 0.05,0.05 0.1,0.07 0.14,0.05 0.03,-0.02 0.09,-0.04 0.17,-0.07 0.1,-0.07 0.14,-0.15 0.13,-0.24 -0.03,-0.13 -0.1,-0.2 -0.23,-0.21zm-1.47 0.25c-0.03,-0.12 -0.08,-0.18 -0.15,-0.19 -0.07,-0.02 -0.16,-0.03 -0.29,-0.04 -0.1,-0.01 -0.18,-0.01 -0.23,0.02 -0.05,0.02 -0.1,0.09 -0.15,0.19 -0.03,0.09 -0.04,0.15 -0.02,0.2 0.03,0.06 0.08,0.12 0.16,0.19 0.1,0.08 0.17,0.14 0.23,0.18 0.06,0.05 0.14,0.04 0.26,-0.02 0.11,-0.08 0.18,-0.15 0.21,-0.22 0.02,-0.07 0.01,-0.18 -0.02,-0.31zm-5.58 0.09c-0.08,-0.05 -0.14,-0.09 -0.18,-0.11 -0.05,-0.03 -0.1,-0.01 -0.16,0.05 -0.08,0.07 -0.13,0.12 -0.15,0.17 -0.03,0.05 -0.02,0.13 0.03,0.23 0.04,0.09 0.09,0.13 0.14,0.13 0.06,0 0.13,0 0.22,-0.02 0.09,-0.01 0.15,-0.02 0.19,-0.04 0.04,-0.02 0.07,-0.08 0.1,-0.16 0.01,-0.08 0,-0.13 -0.04,-0.16 -0.04,-0.02 -0.09,-0.05 -0.15,-0.09zm6.92 0.83l-0.1 -0.11 -0.13 0.06 -0.07 0.18 0.22 0.04 0.08 -0.17zm-5.16 -0.05c-0.13,-0.04 -0.22,-0.04 -0.29,0 -0.06,0.03 -0.12,0.1 -0.19,0.2 -0.07,0.13 -0.12,0.23 -0.13,0.3 -0.01,0.07 0.03,0.15 0.11,0.25 0.08,0.1 0.16,0.15 0.23,0.14 0.08,0 0.18,-0.02 0.3,-0.06 0.12,-0.05 0.2,-0.1 0.26,-0.14 0.06,-0.05 0.08,-0.13 0.07,-0.26 -0.02,-0.14 -0.05,-0.24 -0.09,-0.29 -0.04,-0.06 -0.14,-0.11 -0.27,-0.14zm-3.14 1.02l-0.12 0.05 -0.07 0.16 0.26 -0.08 -0.07 -0.13zm1.89 0.15l-0.23 -0.1 -0.13 0.16 0.09 0.15 0.15 0 0.12 -0.21zm-0.51 1.62c0,-0.2 -0.03,-0.35 -0.08,-0.44 -0.05,-0.09 -0.17,-0.17 -0.36,-0.22 -0.2,-0.06 -0.35,-0.07 -0.45,-0.04 -0.1,0.04 -0.21,0.15 -0.32,0.33 -0.13,0.16 -0.19,0.3 -0.18,0.4 0,0.11 0.06,0.25 0.18,0.41 0.12,0.15 0.24,0.23 0.34,0.23 0.1,0 0.24,-0.03 0.41,-0.1 0.18,-0.05 0.3,-0.11 0.36,-0.18 0.07,-0.07 0.1,-0.2 0.1,-0.39zm1.34 0.38l-0.15 0.06 -0.08 0.19 0.21 0.06 0.17 -0.16 -0.15 -0.15zm1.87 0.49c-0.11,-0.1 -0.24,-0.11 -0.38,-0.03 -0.11,0.06 -0.2,0.11 -0.26,0.14 -0.06,0.03 -0.09,0.11 -0.08,0.24 0.03,0.12 0.08,0.19 0.15,0.19 0.08,0.01 0.18,0.02 0.31,0.03 0.11,0.01 0.2,0.02 0.25,0.01 0.06,0 0.11,-0.06 0.16,-0.16 0.05,-0.1 0.06,-0.18 0.03,-0.23 -0.03,-0.05 -0.09,-0.11 -0.18,-0.19zm-0.19 1.46c0,-0.11 0.01,-0.21 0.02,-0.28 0.01,-0.08 -0.04,-0.14 -0.15,-0.17 -0.13,-0.04 -0.23,-0.05 -0.3,-0.03 -0.08,0.02 -0.15,0.08 -0.23,0.2 -0.07,0.1 -0.09,0.18 -0.04,0.23 0.05,0.06 0.12,0.14 0.19,0.24 0.07,0.08 0.12,0.12 0.16,0.14 0.05,0.02 0.11,0.02 0.2,-0.01 0.09,-0.02 0.14,-0.06 0.14,-0.11 0.01,-0.05 0.01,-0.12 0.01,-0.21zm-1.87 -0.13c-0.11,-0.08 -0.21,-0.11 -0.28,-0.1 -0.08,0.02 -0.17,0.07 -0.29,0.17 -0.12,0.11 -0.21,0.19 -0.27,0.26 -0.06,0.07 -0.06,0.18 -0.01,0.33 0.06,0.16 0.14,0.26 0.24,0.27 0.09,0.02 0.22,0.03 0.38,0.01 0.14,-0.01 0.24,-0.04 0.29,-0.1 0.05,-0.06 0.09,-0.15 0.13,-0.29 0.04,-0.14 0.05,-0.25 0.03,-0.32 -0.02,-0.08 -0.09,-0.16 -0.22,-0.23zm-2.12 0.51l-0.09 -0.17 -0.17 0.13 0.04 0.21 0.2 0 0.02 -0.17zm5.37 -0.15c-0.07,-0.03 -0.13,-0.02 -0.16,0.02 -0.03,0.03 -0.07,0.09 -0.12,0.15 -0.08,0.09 -0.08,0.18 -0.02,0.28 0.05,0.08 0.09,0.14 0.11,0.19 0.03,0.05 0.09,0.06 0.17,0.04 0.11,-0.03 0.16,-0.06 0.17,-0.11 0.02,-0.06 0.02,-0.13 0.02,-0.23 0,-0.1 0,-0.18 -0.02,-0.22 -0.01,-0.04 -0.06,-0.08 -0.15,-0.12zm1.67 0.32c-0.05,-0.06 -0.1,-0.11 -0.13,-0.13 -0.04,-0.03 -0.1,-0.03 -0.17,0 -0.11,0.03 -0.18,0.07 -0.24,0.09 -0.06,0.03 -0.09,0.1 -0.09,0.21 0.02,0.13 0.04,0.21 0.09,0.25 0.04,0.05 0.13,0.08 0.25,0.11 0.12,0.04 0.21,0.05 0.28,0.04 0.07,-0.02 0.13,-0.07 0.2,-0.17 0.06,-0.09 0.06,-0.16 0.01,-0.2 -0.06,-0.05 -0.13,-0.11 -0.2,-0.2zm-6.04 1.15c-0.02,-0.1 -0.06,-0.16 -0.12,-0.19 -0.05,-0.02 -0.13,-0.03 -0.23,-0.03 -0.16,0 -0.26,0.07 -0.33,0.22 -0.03,0.1 -0.06,0.18 -0.06,0.24 -0.01,0.06 0.03,0.12 0.12,0.2 0.09,0.06 0.16,0.09 0.22,0.08 0.05,0 0.13,-0.04 0.23,-0.1 0.09,-0.06 0.15,-0.12 0.18,-0.17 0.04,-0.05 0.03,-0.13 -0.01,-0.25zm0.57 1.88c-0.02,-0.24 -0.05,-0.43 -0.09,-0.55 -0.04,-0.13 -0.17,-0.22 -0.4,-0.27 -0.28,-0.06 -0.49,-0.07 -0.63,-0.04 -0.15,0.04 -0.29,0.18 -0.43,0.42 -0.14,0.27 -0.2,0.47 -0.18,0.62 0.02,0.16 0.12,0.34 0.31,0.55 0.18,0.19 0.34,0.27 0.48,0.24 0.14,-0.03 0.32,-0.1 0.56,-0.2 0.21,-0.09 0.33,-0.19 0.36,-0.29 0.04,-0.11 0.05,-0.27 0.02,-0.48zm14.13 2.28c-1.65,0 -2.97,-0.4 -3.94,-1.22 -0.98,-0.81 -1.47,-2.1 -1.47,-3.86l0 -0.14c0.03,-1.62 0.53,-2.86 1.5,-3.71 0.98,-0.85 2.28,-1.28 3.89,-1.28 1.24,0 2.25,0.24 3.05,0.71 0.79,0.47 1.38,1.1 1.76,1.87 0.39,0.78 0.58,1.63 0.58,2.57l0 0.56c0,0.14 -0.05,0.26 -0.15,0.36 -0.1,0.1 -0.22,0.15 -0.36,0.15l-5.64 0 0 0.1c0,0.38 0.06,0.66 0.17,0.86 0.1,0.19 0.29,0.29 0.57,0.29 0.12,0 0.21,-0.03 0.29,-0.09 0.07,-0.07 0.16,-0.15 0.26,-0.25 0.11,-0.11 0.21,-0.18 0.28,-0.22 0.08,-0.03 0.19,-0.04 0.34,-0.04l3.58 0c0.12,0 0.23,0.03 0.31,0.11 0.08,0.08 0.12,0.18 0.1,0.3 -0.01,0.24 -0.12,0.53 -0.33,0.86 -0.2,0.34 -0.52,0.66 -0.93,0.98 -0.42,0.31 -0.95,0.57 -1.59,0.78 -0.64,0.21 -1.4,0.31 -2.27,0.31zm-2.72 -8.7c-0.12,0 -0.19,0.03 -0.21,0.09 -0.03,0.06 -0.06,0.14 -0.1,0.25 -0.02,0.07 -0.02,0.12 0.01,0.16 0.03,0.03 0.08,0.07 0.15,0.11 0.06,0.06 0.11,0.11 0.16,0.15 0.04,0.04 0.1,0.03 0.18,-0.02 0.08,-0.06 0.14,-0.12 0.17,-0.17 0.02,-0.05 0.01,-0.13 -0.02,-0.24 -0.03,-0.12 -0.06,-0.2 -0.11,-0.25 -0.04,-0.05 -0.12,-0.08 -0.23,-0.08zm1.94 2.35l0.57 0c-0.01,-0.03 -0.02,-0.06 -0.04,-0.1 -0.06,-0.22 -0.1,-0.42 -0.13,-0.58 -0.02,-0.17 -0.02,-0.32 0.02,-0.46 0.09,-0.05 0.2,-0.07 0.34,-0.07 0.51,0 0.76,0.4 0.76,1.19l-0.95 0.02c0.1,0.35 0.18,0.67 0.22,0.94 0.04,0.28 0.14,0.5 0.28,0.66 0.15,0.15 0.41,0.24 0.79,0.25 0.46,0.02 0.84,-0.02 1.12,-0.1 0.29,-0.08 0.52,-0.24 0.69,-0.47 0.18,-0.24 0.34,-0.57 0.49,-1.02 0.13,-0.37 0.14,-0.66 0.04,-0.86 -0.1,-0.19 -0.28,-0.37 -0.54,-0.52 -0.25,-0.15 -0.54,-0.34 -0.86,-0.58 -0.36,-0.28 -0.66,-0.43 -0.9,-0.45 -0.23,-0.02 -0.53,0.1 -0.91,0.35 -0.32,0.23 -0.51,0.45 -0.57,0.66 -0.28,0.16 -0.42,0.53 -0.42,1.14zm-2.72 -1.21c-0.07,-0.03 -0.13,-0.03 -0.18,0 -0.04,0.02 -0.09,0.07 -0.14,0.13 -0.08,0.08 -0.14,0.14 -0.2,0.18 -0.06,0.05 -0.06,0.12 -0.01,0.22 0.06,0.1 0.13,0.13 0.19,0.1 0.06,-0.03 0.15,-0.06 0.27,-0.08 0.11,-0.03 0.17,-0.1 0.18,-0.23 0.02,-0.08 0.02,-0.14 0.01,-0.19 0,-0.05 -0.04,-0.09 -0.12,-0.13zm1.48 0.21c-0.16,-0.08 -0.27,-0.11 -0.35,-0.1 -0.09,0.01 -0.18,0.08 -0.28,0.19 -0.11,0.13 -0.17,0.23 -0.19,0.31 -0.01,0.09 0.03,0.2 0.12,0.33 0.06,0.13 0.13,0.18 0.21,0.17 0.09,-0.02 0.2,-0.05 0.33,-0.07 0.13,-0.03 0.23,-0.05 0.31,-0.07 0.07,-0.02 0.12,-0.09 0.13,-0.23 0.01,-0.15 0,-0.27 -0.03,-0.33 -0.03,-0.07 -0.12,-0.14 -0.25,-0.2zm-0.82 1.59c-0.06,-0.09 -0.12,-0.14 -0.19,-0.14 -0.06,0 -0.14,0.02 -0.24,0.06 -0.12,0.04 -0.19,0.08 -0.23,0.12 -0.04,0.05 -0.06,0.13 -0.06,0.24 0,0.14 0.01,0.25 0.03,0.32 0.02,0.08 0.09,0.13 0.22,0.17 0.14,0.04 0.24,0.04 0.3,-0.01 0.07,-0.04 0.14,-0.13 0.23,-0.25 0.08,-0.1 0.11,-0.19 0.09,-0.26 -0.01,-0.07 -0.06,-0.15 -0.15,-0.25zm0.97 0.18c-0.1,-0.01 -0.17,0.01 -0.19,0.06 -0.03,0.05 -0.06,0.13 -0.12,0.23 -0.03,0.1 -0.06,0.18 -0.09,0.23 -0.03,0.06 0,0.12 0.08,0.18 0.08,0.09 0.16,0.14 0.22,0.14 0.07,0 0.15,-0.03 0.27,-0.1 0.1,-0.06 0.17,-0.12 0.22,-0.17 0.05,-0.05 0.06,-0.14 0.02,-0.26 -0.02,-0.13 -0.07,-0.21 -0.13,-0.24 -0.06,-0.03 -0.16,-0.05 -0.28,-0.07zm-1.72 0.74c-0.15,-0.04 -0.27,-0.04 -0.33,0 -0.07,0.04 -0.15,0.12 -0.24,0.25 -0.06,0.11 -0.07,0.2 -0.03,0.25 0.04,0.06 0.1,0.14 0.18,0.24 0.06,0.09 0.12,0.14 0.17,0.16 0.05,0.02 0.12,0.01 0.21,-0.03 0.16,-0.06 0.24,-0.18 0.24,-0.36 0,-0.14 0,-0.25 0,-0.33 0,-0.08 -0.06,-0.14 -0.2,-0.18zm0.64 1.57c0,-0.09 0,-0.16 0.01,-0.21 0.01,-0.05 -0.03,-0.08 -0.11,-0.09 -0.08,-0.03 -0.14,-0.02 -0.17,0.01 -0.04,0.03 -0.08,0.08 -0.13,0.16 -0.04,0.05 -0.05,0.09 -0.03,0.12 0.02,0.03 0.05,0.07 0.09,0.13 0.05,0.06 0.09,0.11 0.11,0.16 0.03,0.04 0.08,0.05 0.15,0.02 0.08,-0.02 0.11,-0.06 0.1,-0.11 -0.01,-0.05 -0.02,-0.11 -0.02,-0.19zm1.29 -0.02c-0.12,-0.11 -0.25,-0.13 -0.4,-0.05 -0.1,0.06 -0.18,0.11 -0.22,0.15 -0.04,0.04 -0.06,0.11 -0.05,0.22 0.03,0.12 0.07,0.18 0.14,0.19 0.06,0.02 0.15,0.03 0.26,0.04 0.11,0.01 0.21,0.02 0.27,0.03 0.07,0.01 0.13,-0.04 0.18,-0.14 0.05,-0.1 0.06,-0.18 0.01,-0.24 -0.04,-0.06 -0.11,-0.12 -0.19,-0.2zm3.55 0.51c-0.02,-0.06 -0.05,-0.1 -0.08,-0.11 -0.04,-0.01 -0.08,-0.02 -0.15,-0.02 -0.11,0 -0.18,0.04 -0.2,0.11 -0.04,0.11 -0.02,0.19 0.05,0.25 0.07,0.04 0.11,0.07 0.14,0.1 0.04,0.02 0.08,0.01 0.15,-0.02 0.06,-0.05 0.09,-0.1 0.1,-0.14 0.01,-0.03 0,-0.09 -0.01,-0.17zm-0.83 0.85c-0.01,-0.15 -0.02,-0.27 -0.03,-0.35 -0.01,-0.09 -0.08,-0.16 -0.24,-0.19 -0.19,-0.05 -0.33,-0.08 -0.43,-0.07 -0.1,0.01 -0.2,0.09 -0.3,0.26 -0.1,0.15 -0.12,0.26 -0.04,0.34 0.07,0.07 0.16,0.18 0.26,0.32 0.09,0.11 0.17,0.18 0.24,0.21 0.07,0.02 0.17,0.01 0.29,-0.04 0.13,-0.05 0.2,-0.11 0.23,-0.18 0.03,-0.07 0.03,-0.17 0.02,-0.3zm2.17 -0.13c-0.06,-0.15 -0.11,-0.27 -0.16,-0.35 -0.04,-0.08 -0.15,-0.11 -0.33,-0.1 -0.2,0.02 -0.35,0.06 -0.45,0.11 -0.1,0.05 -0.17,0.18 -0.21,0.38 -0.04,0.19 -0.02,0.32 0.07,0.4 0.08,0.07 0.21,0.16 0.38,0.26 0.17,0.1 0.3,0.17 0.41,0.21 0.11,0.04 0.24,-0.01 0.39,-0.15 0.15,-0.13 0.19,-0.24 0.12,-0.34 -0.07,-0.1 -0.14,-0.24 -0.22,-0.42zm-4.46 -0.04l-0.19 -0.11 -0.13 0.19 0.13 0.13 0.19 0.02 0 -0.23zm-0.68 0.4c-0.09,-0.01 -0.15,0 -0.18,0.03 -0.03,0.03 -0.07,0.09 -0.1,0.16 -0.05,0.08 -0.09,0.14 -0.1,0.19 -0.01,0.05 0.01,0.11 0.08,0.17 0.09,0.08 0.15,0.13 0.2,0.16 0.06,0.03 0.13,0.02 0.23,-0.03 0.09,-0.05 0.12,-0.1 0.11,-0.17 -0.02,-0.06 -0.04,-0.14 -0.05,-0.24 -0.01,-0.08 -0.03,-0.14 -0.05,-0.18 -0.02,-0.05 -0.06,-0.08 -0.14,-0.09z",
  "aquarium": "m96,39c-4.75,0 -8.69,0.39 -12.61,2.38c-3.93,2 -7.29,6.95 -7.61,11.18c-0.65,8.46 3.41,12.92 6.5,18.07c3.09,5.15 6.22,10.34 7.43,13.97c1.21,3.62 1.28,3.69 -0.07,5.04l-0.04,0.03l-0.03,0.04c-41.27,42.17 -66.57,102.91 -66.57,166.29c0,84.59 49.34,158.86 116.32,199.69c36.82,22.44 74.7,17.31 116.68,17.31c41.41,0 80.11,4.57 116.62,-17.28c67.88,-40.62 116.38,-114.58 116.38,-199.72c0,-63.22 -25.52,-124.14 -66.55,-166.28l-0.04,-0.04l-0.05,-0.04c-1.35,-1.35 -1.28,-1.42 -0.07,-5.04c1.21,-3.63 4.34,-8.82 7.43,-13.97c3.09,-5.15 7.15,-9.61 6.5,-18.07c-0.32,-4.23 -3.68,-9.18 -7.61,-11.17c-3.92,-2 -7.86,-2.39 -12.61,-2.39l-320,0zm0,18l320,0c0.28,0 0.13,0.03 0.38,0.04c-0.58,1.34 -1.09,2.65 -2.1,4.33c-2.91,4.85 -6.78,10.66 -9.07,17.53c-2.29,6.88 -2.22,16.81 4.43,23.46l-0.09,-0.08c37.57,38.57 61.45,95.38 61.45,153.72c0,78.3 -44.76,146.65 -107.62,184.28c-30.67,18.35 -64.8,14.72 -107.38,14.72c-43.3,0 -76.28,4.23 -107.32,-14.69c-62.03,-37.81 -107.68,-106.75 -107.68,-184.31c0,-58.57 23.65,-115.1 61.43,-153.71l-0.07,0.07c6.66,-6.65 6.72,-16.58 4.43,-23.46c-2.29,-6.87 -6.16,-12.68 -9.07,-17.53c-1.01,-1.68 -1.52,-2.99 -2.1,-4.33c0.25,-0.01 0.1,-0.04 0.38,-0.04zm87.48,61.74c-3.14,-0.01 -6.39,0.06 -9.73,0.19c-20.03,0.78 -43.12,3.94 -63.29,7.21c-2.17,0.36 -4.24,0.71 -6.33,1.06c-5.37,5.67 -10.31,12.48 -14.8,20.12c-0.17,0.3 -0.34,0.6 -0.51,0.9c7.16,-1.35 15.48,-2.84 24.53,-4.31c26.37,-4.28 58.3,-8.12 78.11,-6.93c40.6,2.46 80.8,29.15 128,32c23.11,1.4 55.18,-2.76 82.08,-7.13c9.82,-1.59 18.89,-3.22 26.49,-4.66c-2.09,-4.34 -4.31,-8.55 -6.66,-12.55c-0.81,-1.38 -1.65,-2.73 -2.49,-4.06c-6.14,1.13 -12.94,2.32 -20.23,3.51c-26.37,4.28 -58.3,8.12 -78.11,6.93c-40.6,-2.46 -80.8,-29.15 -128,-32c-2.89,-0.18 -5.91,-0.27 -9.06,-0.28zm-66.11,42.77l-30.03,2.88a192,192 0 0 0 -23.34,91.61a192,192 0 0 0 62.63,141.56a224,224 0 0 1 -38.75,-125.56a224,224 0 0 1 29.49,-110.49zm250.81,13.44a24,24 0 0 0 -24,24a24,24 0 0 0 24,24a24,24 0 0 0 24,-24a24,24 0 0 0 -24,-24zm30.82,78.46a16,16 0 0 0 -16,16a16,16 0 0 0 16,16a16,16 0 0 0 16,-16a16,16 0 0 0 -16,-16zm-94.02,18.54c-29.04,0.46 -80.68,29.66 -102.88,42.21c-14.26,-13.83 -30.01,-26.16 -58.1,-26.16c16,16 16,48 0,64c28.08,0 37.34,-22.15 56.67,-22.17c19.33,-0.01 88.72,43.14 119.33,38.17c38.43,-6.24 64,-32 64,-48c-1.43,-24.58 -47.86,-46.51 -76.28,-48c-0.89,-0.05 -1.8,-0.06 -2.74,-0.05zm31.02,21.43a10.81,10.81 0 0 1 10.81,10.81a10.81,10.81 0 0 1 -10.81,10.81a10.81,10.81 0 0 1 -10.81,-10.81a10.81,10.81 0 0 1 10.81,-10.81z",
  "elixir-16": "M261.72 -2.03c13.79,0 24.97,11.18 24.97,24.97 0,10.83 6.15,26.47 20.71,48.97 10.5,16.24 23.48,33.32 37.79,52.16 5.05,6.65 10.27,13.51 15.6,20.64 38.93,52.02 84.05,117.38 84.05,188.98 0,58.72 -22.68,104.52 -57.97,135.33 -34.79,30.39 -80.41,45.01 -125.15,45.01 -44.74,0 -90.35,-14.62 -125.15,-45.01 -35.29,-30.81 -57.97,-76.61 -57.97,-135.33 0,-71.6 45.12,-136.96 84.06,-188.98 5.33,-7.13 10.54,-13.99 15.59,-20.64 14.32,-18.84 27.29,-35.92 37.8,-52.16 14.55,-22.5 20.7,-38.14 20.7,-48.97 0,-13.79 11.18,-24.97 24.97,-24.97zm0 95.16c-1.23,1.99 -2.48,3.96 -3.74,5.91 -11.62,17.96 -26.28,37.25 -40.95,56.56 -4.83,6.36 -9.66,12.72 -14.39,19.03 -40.14,53.64 -74.1,106.35 -74.1,159.06 0,44.86 16.86,76.75 40.88,97.72 24.51,21.4 57.97,32.68 92.3,32.68 34.34,0 67.79,-11.28 92.3,-32.68 24.02,-20.97 40.88,-52.86 40.88,-97.72 0,-52.71 -33.95,-105.42 -74.1,-159.06 -4.72,-6.31 -9.55,-12.67 -14.38,-19.03 -14.68,-19.31 -29.33,-38.6 -40.95,-56.56 -1.26,-1.95 -2.51,-3.92 -3.75,-5.91zm-66.59 221.14c13.79,0 24.97,11.18 24.97,24.96 0,8.53 4.52,19.15 13.5,28.13 8.98,8.98 19.6,13.5 28.12,13.5 13.79,0 24.97,11.17 24.97,24.97 0,13.78 -11.18,24.97 -24.97,24.97 -24.77,0 -47.44,-12.14 -63.43,-28.13 -15.99,-15.99 -28.13,-38.66 -28.13,-63.44 0,-13.78 11.18,-24.96 24.97,-24.96z",
  "agriculture-ecology": "M10178.29 17436.02l-5959.43 0 -800.05 0c-86.96,-0.01 -157.49,-70.54 -157.49,-157.5 0,-86.96 70.53,-157.49 157.49,-157.49l60.64 0c-183.71,-188.26 -296.89,-445.58 -296.89,-729.15 0,-1.53 0,-3.19 0,-4.71l0 -9562.83c0,-680.36 503.97,-996.91 1585.93,-996.91l1842.64 0c1086.68,0 1574.9,305.53 1574.9,989.04l0 622.09 738.64 0c-25.51,-421.36 157.51,-760.99 451.98,-795.16l0 -1253.79c0.01,-1065.31 863.94,-1929.25 1929.26,-1929.25 1065.31,0 1929.25,863.94 1929.25,1929.25l0 1641.05c0.01,140.89 -114.24,255.14 -255.13,255.14l-395.3 0c-140.89,0 -255.14,-114.25 -255.14,-255.14l0 -1563.88c-0.01,-0.28 -0.01,-0.53 -0.01,-0.78 0,-564.4 -457.71,-1022.11 -1022.11,-1022.11 -23.09,0 -46.29,0.87 -69.26,2.37 -540.89,47.15 -956.19,500.29 -956.19,1043.31 0,6.52 0.13,13.3 0.13,19.69l0 1138.24c407.63,57.16 358.27,353.3 369.43,588.84l15.53 327.74c326.16,176.74 547.46,522.01 547.46,918.59 0,2.04 0,4.34 0,6.37l-0.01 7898.09c0.01,1.56 0.01,3.21 0.01,4.74 0,283.57 -113.17,540.89 -296.89,729.16l1084.33 0c86.96,-0.01 157.49,70.52 157.49,157.49 0,86.96 -70.53,157.49 -157.49,157.49l0 0.01 -1822.99 0 -0.71 0.01 -0.04 -0.01zm-8446.19 0l-333.88 0c-86.96,-0.01 -157.49,-70.54 -157.49,-157.5 0,-86.96 70.53,-157.49 157.49,-157.49l333.87 0.01c86.97,-0.01 157.5,70.52 157.5,157.49 0,86.96 -70.53,157.49 -157.49,157.49l-0.01 0.01zm1174.87 0l-420.49 0c-86.96,-0.01 -157.49,-70.54 -157.49,-157.5 0,-86.96 70.53,-157.49 157.49,-157.49l420.49 0.01c86.97,-0.01 157.5,70.52 157.5,157.49 0,86.96 -70.53,157.49 -157.49,157.49l-0.01 0.01zm1310.54 -314.99l5960.86 0.01c399.38,-3.39 721.26,-328.23 721.26,-727.59 0,-2.04 0,-4.26 0,-6.31l-0.04 -7898.14c0.05,-2.57 0.05,-5.32 0.05,-7.9 0,-399.38 -322.02,-723.8 -721.39,-727.61l-1234.73 -11.77 -0.48 0 -1075.14 -10.25 -589.01 0 0 22.05 -3178.15 0 0 -22.05 -603.19 0 0 8655.66c-0.03,2.05 -0.03,4.27 -0.03,6.31 0,398.94 321.21,723.49 719.97,727.58zm8466.45 314.99l-209.46 0c-86.96,-0.01 -157.49,-70.54 -157.49,-157.5 0,-86.96 70.53,-157.49 157.49,-157.49l209.46 0.01c86.96,-0.01 157.49,70.52 157.49,157.49 0,86.96 -70.53,157.49 -157.49,157.49l0 0.01zm-5642.86 -3904.59l-1154.21 -504.96c187.57,728.23 804.39,1339.19 1154.21,1638.02l0 -1133.06zm-1510.46 -714.91c-5.89,-16.59 -9.05,-34.34 -9.05,-52.63 0,-8.91 0.75,-17.64 2.17,-26.15 -8.02,-118.79 -5.4,-240.06 10.15,-363.45 161.96,-1313.21 1316.03,-2459.99 1529.94,-2662.84 15.35,-25.29 37.63,-45.92 64.19,-59.26l75.26 -68.62 85.38 80.29c12.47,8.71 23.63,19.19 33.1,31.06 97.19,91.94 656.52,638.3 1079.09,1372.45 6.44,8.96 11.97,18.59 16.49,28.79 220.24,388.52 400.52,827.99 453.76,1279.71 176.39,1499.31 -1507.18,2693.08 -1574.9,2743.48l-97.64 62.99 -83.72 -58.75c-4.6,-2.89 -9.05,-6.01 -13.31,-9.34 -123.91,-87.59 -1435.91,-1042.97 -1570.91,-2297.72zm301.69 -157.29l1208.76 528.29 0 -3004.59c-389.39,423.86 -1082.79,1299.59 -1198.51,2230.73 -10.18,82.67 -13.24,164.6 -10.26,245.57zm1523.74 738.09c2.21,10.51 3.36,21.34 3.36,32.36 0,10.9 -1.14,21.74 -3.36,32.35l0 1202.06c443.67,-380.89 1315.9,-1268.57 1198.5,-2252 -39.99,-349.95 -169.51,-696.36 -335.98,-1014.86l-862.52 619.54 0 1380.56zm0 -1779.51l701.6 -503.21c-236.34,-384.16 -507.23,-710.12 -701.6,-926.28l0 1429.49zm5482.23 -1053.26c-176.77,-10.24 -339.56,-100.08 -442.56,-244.13 -163.56,-212.29 -252.36,-473.04 -252.36,-741.06 0,-83.31 8.75,-166.48 25.64,-248.01 116.88,-466.15 295.81,-918.21 528.96,-1338.42l146.46 -261.44 132.29 267.74c210.56,425.21 386.85,871.54 521.36,1326.04 20.76,87.86 31.33,178.01 31.33,268.44 0,254.29 -86.81,498.91 -236,704.72 -108.25,149.34 -271.36,249.73 -455.13,266.13l0 0zm0 3590.41c-177.09,-10.41 -340.01,-100.86 -442.51,-245.67 -163.54,-211.56 -252.61,-471.7 -252.61,-739.21 0,-83.32 8.7,-166.94 25.81,-248.34 116.91,-466.67 295.24,-917.89 529.24,-1338.26l146.46 -261.44 132.29 267.74c210.32,425.07 386.61,871.41 521.13,1325.9l0.08 -0.16c20.82,87.77 31.35,178.12 31.35,268.47 0,253.83 -82.95,500.97 -236.04,703.3 -104.01,152.81 -271.03,251.09 -455.16,267.67l-0.03 0.01zm-3146.65 -7515.54l275.6 -1.12 0.01 -1122.71c0.03,-6.06 -0.14,-12.73 -0.14,-18.89 0,-709.32 543.81,-1300.43 1250.64,-1359.2 29.17,-1.71 58.76,-2.86 88.17,-2.86 736.75,0 1335.07,595.38 1338.66,1332.13l0 1497.73 275.59 -0.01 0 -1574.9c0,-891.39 -722.89,-1614.27 -1614.27,-1614.27 -891.39,0 -1614.27,722.89 -1614.27,1614.27l0 1249.82zm475.74 317.65c-13.56,3.81 -27.87,5.86 -42.65,5.86 -18.84,0 -36.91,-3.31 -53.66,-9.39l-531.08 10.84c-1.94,0.07 -3.89,0.12 -5.85,0.12 -147.19,3.01 -266.16,120.51 -266.16,267.74l-0.01 0 1.24 206.31 909.06 0c29.58,0.22 58.84,1.74 87.78,4.37l164.54 0.72 -0.51 -209.96c0,-160.13 -111.67,-255.94 -262.7,-276.61zm-2888.49 459.42l589.01 0.01 0 -600.04c0,-251.99 0,-674.06 -1259.92,-674.06l-1839.49 0c-1270.94,0 -1270.94,444.12 -1270.94,681.93l0 592.16 603.19 0.01 0 -319.71c0,-245.69 286.63,-429.95 667.76,-429.95l1842.64 0c381.13,0 667.76,184.26 667.76,429.95l0 319.7zm-2863.17 179.54l0 0zm0 -157.49l2548.19 0 0 -341.76c-82.29,-75.76 -190.08,-117.88 -301.95,-117.88 -16.98,0 -34.01,0.98 -50.82,2.89l-1842.64 0.03c-211.04,0 -343.33,81.89 -352.78,118.11l0 338.61z"
};

async function getIcon(name) {
  return { path: ICONS[name.replace(/_/g,'-')] };
}

async function getIconList() {
  return Object.keys(ICONS).map(icon => ({name: icon}));
}

if (!window.frontendVersion || window.frontendVersion <= 20211027.0){
  window.customIconsets = window.customIconsets || {};
  window.customIconsets["psesl"] = getIcon;
}else{
  window.customIcons = window.customIcons || {};
  window.customIcons["psesl"] = { getIcon, getIconList };
}
