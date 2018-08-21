import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
 
export const FBOrgProfile = ({ profile }) => (
    <div>
        <Card style={{margin:'5px 0px', padding:'0px'}}>
            <Image src={profile.avatar_url} />
            <Card.Content>
                <Card.Header>
                    {profile.name}
                </Card.Header>
                <Card.Meta>
                    <span>{profile.location}</span>
                </Card.Meta>
                <Card.Description>
                    {profile.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                ID: {profile.id}
            </Card.Content>
        </Card>
    </div>
)

export default FBOrgProfile;
 
