import { FC, useState, useEffect } from "react";
import { getPokemonNames, getPokemonByName } from "../../api/api";
import PokemonsList from "../../components/PokemonsList/PokemonsList";
import { IPokemon, IPokemonsNames } from "../../interfaces/interfaces";
import { Button, ConfigProvider, Flex, Layout} from "antd";
import { Content, Footer } from "antd/es/layout/layout";

const MainPage: FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAllPokemons, setShowAllPokemons] = useState(true);

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    try {
      const data = await getPokemonNames();
      const res = await data.results.map((item: IPokemonsNames) => (
        getPokemonByName(item.name)
      ))
      const ans = await Promise.all(res)
      setPokemons(ans)
      console.log(ans)
      setLoading(false);
    } catch (error) {
      console.error("Fetch data error!", error);
    }
  };

  const likePokemon = (id: number) => {
    setPokemons(
      pokemons.map((item: IPokemon) => {
        if (item.id === id) {
          return { ...item, isActive: !item.isActive };
        }
        return item;
      })
    );
  };

  const deletePokemon = (id: number) => {
    setPokemons(
      pokemons.filter((item) => {
        return item.id !== id;
    })
    );
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            footerBg: '#fff',
          },
        },
      }}
    >
      <Layout>
        <Content style={{padding: '25px 40px'}}>
          <Flex gap={5} >
            <Button onClick={() => setShowAllPokemons(true)}>All</Button>
            <Button onClick={() => setShowAllPokemons(false)}>Liked</Button>
          </Flex>
          <div>
            {loading ? <p>Loading...</p> :
              <PokemonsList 
                pokemons={showAllPokemons ? pokemons : pokemons.filter((item) => item.isActive)}
                likePokemon={likePokemon}
                deletePokemon ={deletePokemon}
              />}
          </div>
        </Content>

        <Footer style={{ textAlign: 'center'}}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>

    </ConfigProvider>
  );
}

export default MainPage;
