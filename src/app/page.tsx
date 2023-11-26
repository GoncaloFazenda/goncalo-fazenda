import { Button } from '@/components/ui/button';
import { NavigationMenuDemo } from './_components/Menu';
import FetchComponent from './_components/fetchComponent';

export default function Home() {
  return (
    <main className="w-full">
      <NavigationMenuDemo></NavigationMenuDemo>
      <FetchComponent />
      <section className="flex flex-1">
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <Button className="py-24 ">
            <div className=" text-9xl ">Teste</div>
          </Button>
        </div>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <Button key={i} className="py-24 ">
                <div className=" text-9xl ">Teste</div>
              </Button>
            ))}
        </div>
      </section>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <Button key={i} className="py-24 ">
              <div className=" text-9xl ">Teste</div>
            </Button>
          ))}
      </div>
    </main>
  );
}
