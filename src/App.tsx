import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from './components/ui/button';
import { ChevronRight } from 'lucide-react';

function App() {
  return (
    <>
      <Tabs defaultValue='account' className='flex justify-center p-[15px]'>
        <TabsList>
          <TabsTrigger value='account'>Мужчинам</TabsTrigger>
          <TabsTrigger value='password'>Женщинам</TabsTrigger>
        </TabsList>
        {/* <TabsContent value='account'>
          Make changes to your account here.
        </TabsContent>
        <TabsContent value='password'>Change your password here.</TabsContent> */}
      </Tabs>

      <main className='grid gap-[10px]'>
        <section
          id='hero'
          className='grid gap-[10px] p-[15px] min-[769px]:gap-[20px] min-[769px]:p-[20px]'
        >
          <div className='flex items-center justify-between'>
            <h1 className='text-[22px] font-extrabold leading-[130%] min-[769px]:text-[32px] min-[769px]:leading-[100%]'>
              Обувь
            </h1>
            <Button className='h-fit rounded-full bg-[#f2f2f2] p-[5px_5px_5px_10px] text-[14px] font-medium leading-[20px] text-black min-[769px]:gap-[2px] min-[769px]:rounded-[15px] min-[769px]:px-[20px] min-[769px]:py-[14px] min-[769px]:text-[16px] min-[769px]:leading-[140%]'>
              Все
              <ChevronRight />
            </Button>
          </div>
          <div className='grid grid-cols-[repeat(20,_1fr)] grid-rows-[repeat(3,_30vw)] gap-[10px] min-[769px]:h-[500px] min-[769px]:grid-cols-[repeat(10,_1fr)] min-[769px]:grid-rows-[repeat(2,_1fr)]'>
            <a
              href='#'
              className='relative col-[1_/_13] block overflow-hidden rounded-[20px] bg-[#f2f2f2] p-[10px] min-[769px]:col-[1_/_4] min-[769px]:row-[1_/_3] min-[769px]:p-[20px]'
            >
              <div className='relative z-10 text-[14px] font-bold leading-[120%] min-[769px]:text-[24px]'>
                Кроссовки
                <br />и кеды
              </div>
              <img
                src='/sneakers.webp'
                alt='shoes'
                className='absolute left-[60%] top-[50%] w-[100%] -translate-x-1/2 -translate-y-1/2 object-cover min-[769px]:left-[50%] min-[769px]:top-[50%] min-[769px]:h-[120%] min-[769px]:w-[120%]'
              />
            </a>
            <a
              href='#'
              className='relative col-[8_/_21] row-[2_/_2] block overflow-hidden rounded-[20px] bg-[#f2f2f2] p-[10px] min-[769px]:col-[4_/_7] min-[769px]:row-[1_/_3] min-[769px]:p-[20px]'
            >
              <div className='relative z-10 text-[14px] font-bold leading-[120%] min-[769px]:text-[24px]'>
                Обувь для
                <br />
                спорта
              </div>
              <img
                src='/sport-shoes.webp'
                alt='shoes'
                className='absolute left-[60%] top-[50%] w-[100%] -translate-x-1/2 -translate-y-1/2 object-cover min-[769px]:left-[50%] min-[769px]:top-[50%] min-[769px]:h-[120%] min-[769px]:w-[120%]'
              />
            </a>
            <a
              href='#'
              className='relative col-[1_/_8] row-[2_/_2] block overflow-hidden rounded-[20px] bg-[#f2f2f2] p-[10px] min-[769px]:col-[7_/_9] min-[769px]:row-[1] min-[769px]:p-[20px]'
            >
              <div className='relative z-10 text-[14px] font-bold leading-[120%] min-[769px]:text-[24px]'>
                Кастомные
                <br />
                кроссовки
              </div>
              <img
                src='/custom-sneakers.webp'
                alt='shoes'
                className='absolute left-[50%] top-[65%] w-[115%] -translate-x-1/2 -translate-y-1/2 object-cover min-[769px]:left-[50%] min-[769px]:top-[50%] min-[769px]:h-[120%] min-[769px]:w-[120%]'
              />
            </a>
            <a
              href='#'
              className='relative col-[13_/_21] row-[1_/_2] block overflow-hidden rounded-[20px] bg-[#f2f2f2] p-[10px] min-[769px]:col-[9_/_11] min-[769px]:row-[1] min-[769px]:p-[20px]'
            >
              <div className='relative z-10 text-[14px] font-bold leading-[120%] min-[769px]:text-[24px]'>
                Ботинки
              </div>
              <img
                src='/boots.webp'
                alt='shoes'
                className='absolute left-[50%] top-[60%] w-[110%] -translate-x-1/2 -translate-y-1/2 object-cover min-[769px]:left-[50%] min-[769px]:top-[50%] min-[769px]:h-[120%] min-[769px]:w-[120%]'
              />
            </a>
            <a
              href='#'
              className='relative col-[1_/_10] row-[3_/_3] block overflow-hidden rounded-[20px] bg-[#f2f2f2] p-[10px] min-[769px]:col-[7_/_9] min-[769px]:row-[2_/_2] min-[769px]:p-[20px]'
            >
              <div className='relative z-10 text-[14px] font-bold leading-[120%] min-[769px]:text-[24px]'>
                Тапки
              </div>
              <img
                src='/slippers.webp'
                alt='shoes'
                className='absolute left-[50%] top-[60%] w-[110%] -translate-x-1/2 -translate-y-1/2 object-cover min-[769px]:left-[50%] min-[769px]:top-[50%] min-[769px]:h-[120%] min-[769px]:w-[120%]'
              />
            </a>
            <a
              href='#'
              className='relative col-[10_/_21] row-[3_/_3] block overflow-hidden rounded-[20px] bg-[#f2f2f2] p-[10px] min-[769px]:col-[9_/_11] min-[769px]:row-[2_/_2] min-[769px]:p-[20px]'
            >
              <div className='relative z-10 text-[14px] font-bold leading-[120%] min-[769px]:text-[24px]'>
                Сапоги
              </div>
              <img
                src='/riding-boots.webp'
                alt='shoes'
                className='absolute left-[50%] top-[50%] w-[80%] -translate-x-1/2 -translate-y-1/2 object-cover min-[769px]:left-[50%] min-[769px]:top-[50%] min-[769px]:h-[120%] min-[769px]:w-[120%]'
              />
            </a>
          </div>
        </section>
        <section
          id='section2'
          className='grid gap-[10px] p-[15px] min-[769px]:gap-[20px] min-[769px]:p-[20px]'
        >
          <div className='flex items-center justify-between'>
            <h1 className='text-[22px] font-extrabold leading-[130%] min-[769px]:text-[32px] min-[769px]:leading-[100%]'>
              Только что купили
            </h1>
            <Button className='h-fit rounded-full bg-[#f2f2f2] p-[5px_5px_5px_10px] text-[14px] font-medium leading-[20px] text-black min-[769px]:gap-[2px] min-[769px]:rounded-[15px] min-[769px]:px-[20px] min-[769px]:py-[14px] min-[769px]:text-[16px] min-[769px]:leading-[140%]'>
              Все
              <ChevronRight />
            </Button>
          </div>
          <div className='flex items-center gap-[20px]'>
            <a href='#' className='block'>
              <img src='/1.webp' alt='shoes' className='max-w-[150px]' />
              <div className='grid gap-[4px] px-[10px]'>
                <div className='text-[20px] font-bold leading-[20px] tracking-[-0.03rem]'>
                  14 443
                  <span className='text-[12px]'>₽</span>
                </div>
                <div>
                  <span className='mr-[2px] rounded-[4px] bg-[#3e3e3e] px-[3px] text-[11px] leading-[16px] text-white'>
                    7 222
                    <span>₽</span> × 2
                  </span>
                  в сплит
                </div>
                <div className='text-[14px] font-medium leading-[17px]'>
                  Nike React Hyperdunk 2017 Low
                </div>
                <div className='flex gap-2 text-[11px]'>
                  21 день
                  <div>9 дней</div>
                </div>
              </div>
            </a>
            <a href='#' className='block'>
              <img src='/2.webp' alt='shoes' className='max-w-[150px]' />
              <div className='grid gap-[4px] px-[10px]'>
                <div className='text-[20px] font-bold leading-[20px] tracking-[-0.03rem]'>
                  14 443
                  <span className='text-[12px]'>₽</span>
                </div>
                <div>
                  <span className='mr-[2px] rounded-[4px] bg-[#3e3e3e] px-[3px] text-[11px] leading-[16px] text-white'>
                    7 222
                    <span>₽</span> × 2
                  </span>
                  в сплит
                </div>
                <div className='text-[14px] font-medium leading-[17px]'>
                  Nike React Hyperdunk 2017 Low
                </div>
                <div className='flex gap-2 text-[11px]'>
                  21 день
                  <div>9 дней</div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
