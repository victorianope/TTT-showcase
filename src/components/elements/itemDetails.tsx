import {
	Box,
	Grid,
	Heading,
	Image,
	Modal,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';

import { TerroristType } from '../../types/';
import { getRoleColor } from '../../utils/getRoleColor';
import { isLightColor } from '../../utils/isLightColor';
import { Component, ComponentProps } from '../base/fc';

interface ItemDetailsProps extends ComponentProps {
	terrorist: TerroristType;
	onClose: () => void;
}

export const ItemDetails: Component<ItemDetailsProps> = (props) => {
	const { terrorist, onClose } = props;

	const { colorMode } = useColorMode();
	const backgroundColor = useColorModeValue('gray.50', '#1c1c1e');

	return (
		<Modal isOpen={true} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent
				pointerEvents={'auto'}
				borderRadius={'20px'}
				background={backgroundColor}
				overflow={'hidden'}
				width={'100%'}
				minW={'700px'}
				margin={'0 auto'}
			>
				<ModalHeader marginTop={2} marginX={6}>
					<Grid templateColumns={'repeat(2, 1fr)'}>
						<Box marginTop={2}>
							<Text
								textColor={getRoleColor(colorMode === 'light', terrorist.group)}
								fontSize={'14px'}
								textTransform={'uppercase'}
							>
								{terrorist.group}
							</Text>
							<Heading
								fontSize={'36px'}
								textColor={getRoleColor(colorMode === 'light', terrorist.group)}
								margin={'8px 0'}
							>
								{terrorist.name}
							</Heading>
						</Box>
						<Box
							justifySelf={'right'}
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
					</Grid>
				</ModalHeader>
				<ModalFooter>
					<Box
						borderRadius={'25px'}
						marginBottom={'10px'}
						width={'100%'}
						padding={'15px'}
						lineHeight={'28px'}
						backgroundColor={getRoleColor(
							colorMode === 'light',
							terrorist.group
						)}
					>
						<Box width={'100%'} marginTop={'12px'} paddingY={'10px'}>
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
					</Box>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
