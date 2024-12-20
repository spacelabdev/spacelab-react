import React from 'react';
import { Experiment, Variant } from '@marvelapp/react-ab-test';

export default function ThankYou() {
  return (
    <>
      <span className="cta-heading">Thank You!</span>
      <br />
      <Experiment name="ThankYouMessageTest">
        <Variant name="ThankYou.v1">
          <span className="cta-subheading">
            You are now a part of the SpaceLab community! We appreciate your subscription to our newsletter and look forward to sharing the latest updates on space exploration and our projects.  Ad Astra!🚀
          </span>
        </Variant>
        <Variant name="ThankYou.v2">
          <span className="cta-subheading">
            You have now subscribed to our email newsletter. You should receive a confirmation email soon. Ad Astra!🚀
          </span>
        </Variant>
      </Experiment>
    </>
  );
}
