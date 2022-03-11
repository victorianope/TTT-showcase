import { useState } from 'react';

import {
	Box,
	Collapse,
	Flex,
	Heading,
	Image,
	ListItem,
	Text,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';

import { TerroristType } from '../../../types';
import { getRoleColor } from '../../../utils/getRoleColor';
import { isLightColor } from '../../../utils/isLightColor';
import { Component, ComponentProps } from '../../base/fc';

interface ItemProps extends ComponentProps {
	terrorist: TerroristType;
}

export const Item: Component<ItemProps> = (props) => {
	const { terrorist } = props;

	const [isOpen, setIsOpen] = useState(false);

	const { colorMode } = useColorMode();
	const backgroundColor = useColorModeValue('#EEE', '#444');

	return (
		<ListItem
			style={{
				listStyle: 'none',
			}}
			backgroundColor={backgroundColor}
			borderRadius={'10px'}
			padding={'20px'}
			overflow={'hidden'}
			cursor={'pointer'}
			borderWidth={'3px'}
			borderColor={getRoleColor(colorMode === 'light', terrorist.group)}
			onClick={() => {
				setIsOpen(!isOpen);
			}}
		>
			<Flex>
				<Box
					maxWidth={'80px'}
					height={'80px'}
					borderRadius={'20px'}
					bgColor={getRoleColor(colorMode === 'light', terrorist.group)}
				>
					<Image
						width={'80px'}
						src={`images/${terrorist.image}`}
						opacity={0.8}
						alt=''
					/>
				</Box>
				<Box marginLeft={8}>
					<Text
						fontSize={'14px'}
						textColor={getRoleColor(colorMode === 'light', terrorist.group)}
						textTransform={'uppercase'}
					>
						{terrorist.group}
					</Text>
					<Heading
						fontSize={'36px'}
						textColor={getRoleColor(colorMode === 'light', terrorist.group)}
					>
						{terrorist.name}
					</Heading>
				</Box>
			</Flex>
			<Collapse in={isOpen} animateOpacity>
				<Box
					width={'100%'}
					backgroundColor={getRoleColor(colorMode === 'light', terrorist.group)}
					borderRadius={'15px'}
					marginTop={'12px'}
					paddingY={'10px'}
				>
					{terrorist.description.map((item, itemId) => {
						return (
							<Text
								key={itemId}
								marginX={'18px'}
								paddingY={'4px'}
								textColor={
									isLightColor(
										getRoleColor(colorMode === 'light', terrorist.group)
									)
										? 'black'
										: 'white'
								}
							>
								{item}
							</Text>
						);
					})}
				</Box>
			</Collapse>
		</ListItem>
	);
};
