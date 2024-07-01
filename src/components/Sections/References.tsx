import classNames from 'classnames';
import {FC, memo, UIEventHandler, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {reference,SectionId} from '../../data/data';
import type {Reference} from '../../data/dataDef';
import useInterval from '../../hooks/useInterval';
import useWindow from '../../hooks/useWindow';
import Section from '../Layout/Section';

const References: FC = memo(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  const itemWidth = useRef(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const {width} = useWindow();

  const {imageSrc, references} = reference;

  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  // Mobile iOS doesn't allow background-fixed elements
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  useEffect(() => {
    itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  }, [width]);

  useEffect(() => {
    if (scrollContainer.current) {
      const newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);
      setActiveIndex(newIndex);
    }
  }, [itemWidth, scrollValue]);

  const setReference = useCallback(
    (index: number) => () => {
      if (scrollContainer !== null && scrollContainer.current !== null) {
        scrollContainer.current.scrollLeft = itemWidth.current * index;
      }
    },
    [],
  );
  const next = useCallback(() => {
    if (activeIndex + 1 === references.length) {
      setReference(0)();
    } else {
      setReference(activeIndex + 1)();
    }
  }, [activeIndex, setReference, references.length]);

  const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(event => {
    setScrollValue(event.currentTarget.scrollLeft);
  }, []);

  useInterval(next, 10000);

  // If no references, don't render the section
  if (!references.length) {
    return null;
  }

  return (
    <Section noPadding sectionId={SectionId.References}>
      <div
        className={classNames(
          'flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8',
          parallaxEnabled && 'bg-fixed',
          {'bg-neutral-700': !imageSrc},
        )}
        style={imageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
        <div className="z-10 w-full max-w-screen-md px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg">
          <h2 className="self-center text-xl font-bold text-white">My References:</h2>
            <div
              className="no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth"
              onScroll={handleScroll}
              ref={scrollContainer}>
              {references.map((reference, index) => {
                const isActive = index === activeIndex;
                return (
                  <Reference isActive={isActive} key={`${reference.info}-${index}`} reference={reference} />
                );
              })}
            </div>
            <div className="flex gap-x-4">
              {[...Array(references.length)].map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    className={classNames(
                      'h-3 w-3 rounded-full bg-gray-300 transition-all duration-500 sm:h-4 sm:w-4',
                      isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-60',
                    )}
                    disabled={isActive}
                    key={`select-button-${index}`}
                    onClick={setReference(index)}></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

const Reference: FC<{reference: Reference; isActive: boolean}> = memo(
  ({reference: {info, contact, contact2}, isActive}) => (
    <div
      className={classNames(
        'flex w-full shrink-0 snap-start snap-always flex-col items-start gap-y-4 p-2 transition-opacity duration-1000 sm:flex-row sm:gap-x-6',
        isActive ? 'opacity-100' : 'opacity-0',
      )}>
      <div className="flex flex-col gap-y-4">
        <p className="prose prose-sm font-medium italic text-white sm:prose-base">{info}</p>
        <p className="text-xs italic text-white sm:text-sm md:text-base lg:text-lg">{contact}</p>
        <p className="text-xs italic text-white sm:text-sm md:text-base lg:text-lg">{contact2}</p>
      </div>
    </div>
  ),
);

export default References;
