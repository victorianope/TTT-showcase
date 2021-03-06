import {
	Box,
	Heading,
	ListItem,
	Text,
	useColorMode,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';

import { TerroristType } from '../../../types';
import { getRoleColor } from '../../../utils/getRoleColor';
import { Component, ComponentProps } from '../../base/fc';
import { CardDetails } from './cardDetails';

interface CardProps extends ComponentProps {
	terrorist: TerroristType;
}

export const Card: Component<CardProps> = (props) => {
	const { terrorist } = props;

	const { colorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const bgColor = useColorModeValue('#EEE', '#1c1c1e');

	return (
		<>
			<ListItem
				listStyleType={'none'}
				position={'relative'}
				padding={'25px'}
				height={'460px'}
				flex={{ base: '0 100%', md: '0 0 60%', xl: '0 0 0 33%' }}
				maxWidth={{ base: '100%', md: '50%', xl: '33%' }}
			>
				<Box
					width={'100%'}
					height={'100%'}
					position={'relative'}
					display={'block'}
					borderRadius={'30px'}
					borderWidth={'8px'}
					borderColor={getRoleColor(colorMode === 'light', terrorist.group)}
				>
					<Box
						cursor={'pointer'}
						position={'relative'}
						borderRadius={'20px'}
						background={
							colorMode === 'light'
								? getRoleColor(true, terrorist.group)
								: '#1c1c1e'
						}
						overflow={'hidden'}
						width={'100%'}
						height={'100%'}
						margin={'0 auto'}
						onClick={onOpen}
					>
						<Box
							position={'absolute'}
							top={'12.5%'}
							left={'12.5%'}
							overflow={'hidden'}
							height={'420px'}
						>
							<img width={'300vh'} src={`images/${terrorist.image}`} alt='' />
						</Box>
						<Box
							position={'absolute'}
							top={'15px'}
							left={'15px'}
							maxWidth={'600px'}
						>
							<Text
								textColor={
									colorMode === 'light'
										? bgColor
										: getRoleColor(false, terrorist.group)
								}
								fontSize={'14px'}
								textTransform={'uppercase'}
							>
								{terrorist.group}
							</Text>
							<Heading
								color={
									colorMode === 'light'
										? bgColor
										: getRoleColor(false, terrorist.group)
								}
								margin={'8px 0'}
							>
								{terrorist.name}
							</Heading>
						</Box>
					</Box>
				</Box>
			</ListItem>
			{isOpen && <CardDetails terrorist={terrorist} onClose={onClose} />}
		</>
	);
};
