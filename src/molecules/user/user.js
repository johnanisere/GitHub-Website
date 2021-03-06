import React from 'react';
import Avatar from 'src/atoms/avatar';
import Highlight from 'src/atoms/highlight';
import { propTypes, defaultProps } from './prop-type';
import UserMeta from './user-meta';
import {
	UserContainer,
	UserAvatar,
	UserName,
	UserDescription,
	UserDescriptionHighlight,
} from './elements';

const decorators = {
	'@': (segment, match, key) => <UserDescriptionHighlight key={key}>{segment}</UserDescriptionHighlight>,
	'#': (segment, match, key) => <UserDescriptionHighlight key={key}>{match}</UserDescriptionHighlight>,
};

export default function UserMolecule(props) {
	const identifier = `${props.name} (${props.username})`;

	return (
		<UserContainer>
			<UserMeta {...props} />
			<UserAvatar>
				<Avatar
					url={props.avatarUrl}
					name={identifier}
					title={identifier}
				/>
			</UserAvatar>
			<UserName title={identifier}>
				{props.name}
			</UserName>
			<UserDescription>
				<Highlight decorators={decorators}>
					{props.description}
				</Highlight>
			</UserDescription>
		</UserContainer>
	);
}

UserMolecule.propTypes = propTypes;
UserMolecule.defaultProps = defaultProps;
