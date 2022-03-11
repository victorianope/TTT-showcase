import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
	Box,
	Button,
	ButtonGroup,
	Center,
	Flex,
	Input,
	useColorModeValue,
} from '@chakra-ui/react';

import { terroristList } from '../../assets/database';
import { TerroristType } from '../../types/';
import { Component } from '../base/fc';
import { CardList } from './grid/cardList';
import { Header } from './header';
import { ItemList } from './list/itemList';

export const Home: Component = () => {
	const { searchQuery } = useParams();

	const [showAsList, setShowAsList] = useState(true);
	const [query, setQuery] = useState(searchQuery || '');
	const [terroristFilteredList, setTerroristFilteredList] =
		useState<Array<TerroristType>>(terroristList);

	const searchBarColor = useColorModeValue('black', 'white');
	const bgColor = useColorModeValue('gray.200', 'black');

	useEffect(() => {
		setTerroristFilteredList(
			terroristList.filter((item) => {
				const descriptionCheck = item.description.some((descriptionItem) =>
					descriptionItem
						.toLocaleLowerCase()
						.includes(query.toLocaleLowerCase())
				);
				const nameCheck = item.name
					.toLocaleLowerCase()
					.includes(query.toLocaleLowerCase());
				const groupCheck = item.group
					.toLocaleLowerCase()
					.includes(query.toLocaleLowerCase());

				return descriptionCheck || nameCheck || groupCheck;
			})
		);
	}, [query]);

	return (
		<Box background={bgColor} height={'100%'} minH={'100vh'}>
			<Center>
				<Box
					maxWidth={{ base: '990px', xl: '1440px' }}
					flex={'1 1 100%'}
					padding={'45px 25px'}
				>
					<Header />

					<Flex justifyContent={'center'} marginTop={6}>
						<ButtonGroup spacing={0} size={'lg'}>
							<Button
								borderRightRadius={0}
								borderWidth={'1px'}
								colorScheme={showAsList ? 'teal' : 'gray'}
								onClick={() => {
									setShowAsList(true);
								}}
							>
								List
							</Button>
							<Button
								borderLeftRadius={0}
								borderWidth={'1px'}
								colorScheme={!showAsList ? 'teal' : 'gray'}
								onClick={() => {
									setShowAsList(false);
								}}
							>
								Grid
							</Button>
						</ButtonGroup>
					</Flex>

					<Center>
						<Input
							maxWidth={{ base: '80%', md: '70%', lg: '50%', xl: '40%' }}
							borderColor={searchBarColor}
							marginTop={6}
							type='text'
							value={query}
							placeholder={'¿Qué podrá hacer mi personaje?'}
							_placeholder={{
								textColor: searchBarColor,
							}}
							onChange={(e) => {
								setQuery(e.target.value);
							}}
							autoFocus
						/>
					</Center>

					{showAsList ? (
						<ItemList
							terroristFilteredList={
								query.length !== 0 ? terroristFilteredList : terroristList
							}
						/>
					) : (
						<CardList
							terroristFilteredList={
								query.length !== 0 ? terroristFilteredList : terroristList
							}
						/>
					)}
				</Box>
			</Center>
		</Box>
	);
};
