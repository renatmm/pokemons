import React, { FC } from 'react';
import { HeartOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Image } from 'antd';
import { IPokemon } from "../../interfaces/interfaces";

const { Meta } = Card;

interface PokemonCardProps {
   pokemon: IPokemon;
   likePokemon: (id: number) => void;
   deletePokemon: (id: number) => void;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon, likePokemon, deletePokemon }) => {
    return (
       <Card
           style={{ width: 300 }}
           cover={
               <Image
                   alt={pokemon.name}
                   src={pokemon.sprites.other['official-artwork'].front_default}
               />
           }
           actions={[
               <Button
                   size='middle'
                   icon={<HeartOutlined />}
                   type={pokemon.isActive ? 'primary' : 'default'}
                   onClick={() => likePokemon(pokemon.id)}
               />,
               <Button
                   size='middle'
                   icon={<DeleteOutlined />}
                   onClick={() => deletePokemon(pokemon.id)}
               />
           ]}
       >
           <Meta
               title={pokemon.name}
           />
       </Card>
   );
};

export default PokemonCard;
