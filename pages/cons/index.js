import Head from 'next/head';
import { select } from '../../database/con/index';
import Card from './Card';


export default function Confs({ dataSource }) {
  return (
    <div className="container mx-auto prose prose-xl">
      <Head>
        <title>Cons - 诺</title>
      </Head>

      <div className="flex justify-center">
        {dataSource.map(con => (<Card key={con.name} {...con} />))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const dataSource = await select();
  return {
    props: { dataSource },
  };
}
