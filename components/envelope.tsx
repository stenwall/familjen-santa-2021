import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
import Rules from './rules';

gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(MotionPathPlugin);

interface Props {}

const Envelope = (props: Props) => {
  let t1 = gsap.timeline({ paused: true });
  let t2 = gsap.timeline();
  let flap = CSSRulePlugin.getRule('.envelope:before');
  let letter = CSSRulePlugin.getRule('.letter');
  let ruleText = CSSRulePlugin.getRule('.rules-title');

  // t2.from(ruleText, {
  //   cssRule: {
  //     yPercent: -2000,
  //   }
  // })
  // .to(ruleText, {
  //   duration: 0.5,
  //   ease: 'sine.in',
  //   cssRule: {
  //     yPercent: -300,
  //   }
  // })
  // .to(ruleText, {
  //   duration: 0.5,
  //   ease: 'sine.in',
  //   cssRule: {
  //     translateY: 27,
  //   }
  // })
  // .to(ruleText, {
  //   duration: 0.5,
  //   ease: 'sine.in',
  //   cssRule: {
  //     translateY: -12,
  //   }
  // })
  // .to(ruleText, {
  //   duration: 0.5,
  //   ease: 'sine.in',
  //   cssRule: {
  //     translateY: 7,
  //   }
  // })
  // .to(ruleText, {
  //   ease: 'bounce.out',
  //   cssRule: {
  //     yPercent: 0,
  //   }
  // });

  t2.from(ruleText, {
    cssRule: {
      yPercent: -2000,
    },
  })
  .to(ruleText, {
    duration: 0.5,
    ease: 'sine.in',
    motionPath: {
      path: [
        { x: 0, y: 0.9 },
        { x: 0, y: 0.03 },
        { x: 0, y: 0.69 },
        { x: 0, y: 0.22 }
      ],
      type: 'cubic'
    }
  })
  .to(ruleText, {
    duration: 2,
    ease: 'bounce.out',
    cssRule: {
      yPercent: 0,
    }
  });

  // t2.fromTo(ruleText, {
  //   duration: 10,
  //   ease: 'sine.in',
  //   cssRule: {
  //     yPercent: -2000,
  //   },
  //   motionPath: {
  //     path: [
  //       { x: 0, y: 0.9 },
  //       { x: 0, y: 0.03 },
  //       { x: 0, y: 0.69 },
  //       { x: 0, y: 0.22 }
  //     ],
  //     type: 'cubic'
  //   }
  // }, {
  //   ease: 'bounce.out',
  //   cssRule: {
  //     yPercent: 0,
  //   }
  // });

  t1.to(flap, {
    duration: 0.5,
    cssRule: {
      rotateX: 180
    }
  })
    .set(flap, {
      cssRule: {
        zIndex: 10
      }
    })
    .set(letter, {
      cssRule: {
        zIndex: 15
      }
    })
    .to(letter, {
      cssRule: {
        zIndex: 15,
        translateY: -600
      },
      duration: 0.9,
      ease: 'back.inOut(1.5)'
    })
    .set(letter, {
      zIndex: 15
    })
    .set(letter, {
      zIndex: 200
    })
    .to(letter, {
      duration: 0.9,
      ease: 'back.inOut(1.4)',
      transformOrigin: 'right 50%',
      cssRule: {
        xPercent: 60,
        yPercent: -60,
        translateZ: 0,
        rotation: -15
      }
    });

  // t2.to(letter, {
  //   duration: 0.9,
  //   ease: 'back.inOut(1.4)',
  //   transformOrigin: 'right 50%',
  //   cssRule: {
  //     xPercent: 0,
  //     yPercent: 0,
  //     translateZ: -1600,
  //     rotation: 0
  //   }
  // })
  //   .set(letter, {
  //     zIndex: 15
  //   })
  //   .to(letter, {
  //     cssRule: {
  //       // zIndex: 15,
  //       translateY: -200
  //     },
  //     duration: 0.9,
  //     ease: 'back.inOut(1.5)'
  //   })
  //   .set(flap, {
  //     cssRule: {
  //       zIndex: 30
  //     }
  //   })
  //   .to(flap, {
  //     duration: 0.5,
  //     cssRule: {
  //       rotateX: -180
  //     }
  //   });

  const openCard = () => {
    t1.play();
  };

  const closeCard = () => {
    t1.reverse();
  };

  return (
    <>
      <div className="content">
        <div className="rules-title">
          regler <span>&#10168;</span>
        </div>
        <div className="envelope" onClick={openCard}></div>
        <div className="letter" onClick={closeCard}>
          <Rules onClose={closeCard} />
        </div>
      </div>
    </>
  );
};

export default Envelope;
