const orbs = {
  e2: "/orbs/e2.svg",
  e3: "/orbs/e3.svg",
  e4: "/orbs/e4.svg",
  e5: "/orbs/e5.svg",
  e6: "/orbs/e6.svg",
  e7: "/orbs/e7.svg",
  e8: "/orbs/e8.svg",
};

// One orb every ~150vh, alternating sides — covers homepage (~500vh) and long case study pages (~1500vh+)
const orbLayout = [
  { src: orbs.e2, left: "calc(50% - 200px)",  top: "-10vh"   },
  { src: orbs.e5, left: "calc(50% + 35vw)",   top: "5vh"     },
  { src: orbs.e4, left: "calc(50% - 38vw)",   top: "20vh"    },

  { src: orbs.e6, left: "calc(50% + 25vw)",   top: "140vh"   },
  { src: orbs.e3, left: "calc(50% - 32vw)",   top: "240vh"   },

  { src: orbs.e7, left: "calc(50% + 20vw)",   top: "360vh"   },
  { src: orbs.e8, left: "calc(50% - 35vw)",   top: "460vh"   },

  { src: orbs.e5, left: "calc(50% + 30vw)",   top: "580vh"   },
  { src: orbs.e2, left: "calc(50% - 15vw)",   top: "680vh"   },

  { src: orbs.e4, left: "calc(50% + 28vw)",   top: "800vh"   },
  { src: orbs.e6, left: "calc(50% - 30vw)",   top: "900vh"   },

  { src: orbs.e3, left: "calc(50% + 22vw)",   top: "1020vh"  },
  { src: orbs.e7, left: "calc(50% - 25vw)",   top: "1120vh"  },

  { src: orbs.e8, left: "calc(50% + 32vw)",   top: "1240vh"  },
  { src: orbs.e5, left: "calc(50% - 20vw)",   top: "1340vh"  },

  { src: orbs.e2, left: "calc(50% + 18vw)",   top: "1460vh"  },
  { src: orbs.e4, left: "calc(50% - 33vw)",   top: "1560vh"  },

  { src: orbs.e6, left: "calc(50% + 26vw)",   top: "1680vh"  },
  { src: orbs.e3, left: "calc(50% - 20vw)",   top: "1780vh"  },
  { src: orbs.e7, left: "calc(50% + 32vw)",   top: "1900vh"  },
  { src: orbs.e8, left: "calc(50% - 28vw)",   top: "2000vh"  },
  { src: orbs.e5, left: "calc(50% + 15vw)",   top: "2120vh"  },
];

export default function GradientBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
      aria-hidden="true"
      style={{ minHeight: "100%" }}
    >
      <div className="absolute inset-0 bg-white" />

      {orbLayout.map((orb, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: orb.left,
            top: orb.top,
            width: "clamp(600px, 70vw, 1100px)",
            height: "clamp(600px, 70vw, 1100px)",
            transform: "translate(-50%, 0)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={orb.src}
            style={{
              position: "absolute",
              inset: "-8.5%",
              width: "117%",
              height: "117%",
              maxWidth: "none",
              pointerEvents: "none",
            }}
          />
        </div>
      ))}
    </div>
  );
}
