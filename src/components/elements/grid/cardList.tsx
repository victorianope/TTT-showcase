import {
	Box,
	Heading,
	Icon,
	UnorderedList,
	useColorModeValue,
} from '@chakra-ui/react';

import { TerroristType } from '../../../types/';
import { Component, ComponentProps } from '../../base/fc';
import { Card } from './card';

interface ListProps extends ComponentProps {
	terroristFilteredList: TerroristType[];
}

export const CardList: Component<ListProps> = (props) => {
	const { terroristFilteredList } = props;

	const noResultsColor = useColorModeValue('teal', 'teal.200');
	const bgColor = useColorModeValue('#EEE', '#1c1c1e');

	if (terroristFilteredList.length === 0) {
		return (
			<UnorderedList
				listStyleType={'none'}
				padding={0}
				margin={0}
				marginTop={12}
				display={'flex'}
				flexWrap={'wrap'}
				justifyContent={'space-evenly'}
				alignContent={'center'}
			>
				<Box
					position={'relative'}
					padding={4}
					paddingX={10}
					background={bgColor}
					borderRadius={'30px'}
					borderWidth={'8px'}
					cursor={'default'}
					borderColor={noResultsColor}
				>
					<Heading fontSize={'36px'} color={noResultsColor} margin={'8px 0'}>
						No hay resultados...
					</Heading>
					<Box textAlign={'center'}>
						<Icon color={noResultsColor} fontSize={'256px'}>
							<path
								fill={'currentColor'}
								d={
									'M13,8A4,4 0 0,1 9,12A4,4 0 0,1 5,8A4,4 0 0,1 9,4A4,4 0 0,1 13,8M17,1' +
									'8V20H1V18C1,15.79 4.58,14 9,14C13.42,14 17,15.79 17,18M20.5,14.5V16H' +
									'19V14.5H20.5M18.5,9.5H17V9A3,3 0 0,1 20,6A3,3 0 0,1 23,9C23,9.97 22.' +
									'5,10.88 21.71,11.41L21.41,11.6C20.84,12 20.5,12.61 20.5,13.3V13.5H19' +
									'V13.3C19,12.11 19.6,11 20.59,10.35L20.88,10.16C21.27,9.9 21.5,9.47 2' +
									'1.5,9A1.5,1.5 0 0,0 20,7.5A1.5,1.5 0 0,0 18.5,9V9.5Z'
								}
							/>
						</Icon>
					</Box>
				</Box>
			</UnorderedList>
		);
	}

	return (
		<UnorderedList
			listStyleType={'none'}
			padding={0}
			margin={0}
			display={'flex'}
			flexWrap={'wrap'}
			justifyContent={'space-evenly'}
			alignContent={'center'}
		>
			{terroristFilteredList.map((terroristItem, terroristId) => (
				<Card key={terroristId} terrorist={terroristItem} />
			))}
		</UnorderedList>
	);
};
