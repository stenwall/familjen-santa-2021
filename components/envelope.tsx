import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin';
import Rules from './rules';

gsap.registerPlugin(CSSRulePlugin);

interface Props {}

const Envelope = (props: Props) => {
  let t1 = gsap.timeline({ paused: true });
  let t2 = gsap.timeline({ paused: true });
  let flap = CSSRulePlugin.getRule('.envelope:before');
  let letter = CSSRulePlugin.getRule('.letter');

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
        <div className="envelope" onClick={openCard}></div>
        <div className="letter" onClick={closeCard}>
          <Rules onClose={closeCard} />
        </div>
      </div>
    </>
  );
};

export default Envelope;
