import { ReactNode, useEffect, useRef } from "react";
import { useIsLandscape } from "../../hooks/useIsLandscape";

type Props = {
  className?: string;
  portraitDeviceId: string;
  children: ReactNode;
};

const Section = ({ className, portraitDeviceId, children }: Props) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isLandscapeDevice = useIsLandscape();

  useEffect(() => {
    // Set id attribute on portrait devices
    if (sectionRef.current) {
      if (isLandscapeDevice) {
        sectionRef.current.removeAttribute("id");
      } else {
        sectionRef.current.id = portraitDeviceId;
      }
    }
  }, [isLandscapeDevice, portraitDeviceId]);

  return (
    <section className={className} ref={sectionRef}>
      {children}
    </section>
  );
};

export default Section;
