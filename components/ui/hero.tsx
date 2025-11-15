import { FigmaSVG } from "@/public"
;
const hero = () => {
  return (
    <div>
        <div className="pl-8 pr-8 pt-16 pb-16 flex flex-col gap-4">
            <div className=''>
                <h1 className="text-lg font-bold mb-6 text-white">
                I&apos;m Kairen [Atanu].
                </h1>
            </div>
            <div className='text-sm text-(--secondary-text) text-justify flex flex-wrap gap-1 leading-6'>
                <p className='inline font-medium text-sm/6 text dark:text-neutral-400 text-neutral-600'>
                    I&apos;m a
                </p>
                <p className='inline font-medium text-sm/6 text dark:text-neutral-100 text-neutral-600'>
                    Design
                </p>
                <div className='inline'>
                    <p className='inline line-through font-medium text-sm/6 text dark:text-neutral-400 text-neutral-600'>
                    engine
                    </p>
                    <p className='inline font-medium text-sm/6 text dark:text-neutral-100 text-neutral-600'>
                    er.
                    </p>
                </div>
                <p className='font-medium text-sm/6 text dark:text-neutral-400 text-neutral-600'>
                    I love
                </p>
                <p className='font-medium text-sm/6 text dark:text-neutral-100 text-neutral-600'>
                    Design, Code
                </p>
                <p className='font-medium text-sm/6 text dark:text-neutral-400 text-neutral-600'>
                    and
                </p>
                <span className='font-medium text-sm/6 text dark:text-neutral-400 text-neutral-600'>
                    Motion.
                </span>
                <p className='font-medium text-sm/6 text dark:text-neutral-400 text-neutral-600'>
                    Also currently exploring about
                </p>
                <p className='font-medium text-sm/6 text dark:text-neutral-100 text-neutral-600'>
                    photography
                </p>
                <p className='font-medium text-sm/6 text dark:text-neutral-400 text-neutral-600'>
                    &
                </p>
                <p className='font-medium text-sm/6 text dark:text-neutral-100 text-neutral-600'>
                    films.
                </p>


                <span className="flex gap-1 dark:text-neutral-100 text-neutral-600">
                    <p className='font-medium text-sm/6'>
                        I like to build things that makes live easy. My Daily go to tools are
                    </p>
                     <FigmaSVG className="w-4 aspect-square" /> Figma
                </span>
                </div>
        </div>
    </div>
  )
}

export default hero
