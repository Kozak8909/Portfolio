import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import CarouselCard from '../Carousel_Card/CarouselCard';
import "../../styles/base_embla.scss";
import styles from "./carousel.module.scss";
import { ReactComponent as PrevButton } from '../../img/svg/Prev-Button.svg';
import { ReactComponent as NextButton } from '../../img/svg/Next-Button.svg';
import { projectsData } from '../../projects/projects';

const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.plugins().autoplay?.play()
    }, [emblaApi])

    return (
        <div className={`embla ${styles.carousel}`}>
            <div className="embla__viewport" ref={emblaRef}>
                <div className={`embla__container ${styles.carousel__container}`}>
                    {projectsData.map((project) => (
                        <CarouselCard
                            key={project.id}
                            title={project.shortTitle || project.title}
                            description={project.shortDescription || project.description}
                            badge={project.badge || project.category}
                            image={project.image}
                            link={project.link}
                            techStack={project.techStack}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.carousel__buttons}>
                <button className={`embla__prev ${styles.carousel__prev}`} onClick={scrollPrev}>
                    <PrevButton fill="white" className={styles.carousel__prevIcon} />
                </button>
                <button className={`embla__next ${styles.carousel__next}`} onClick={scrollNext}>
                    <NextButton fill="white" className={styles.carousel__nextIcon} />
                </button>
            </div>
        </div>
    )
}

export default EmblaCarousel;
