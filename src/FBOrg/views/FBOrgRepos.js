import React, { Component } from 'react'
import { Header, Table } from 'semantic-ui-react'

export const FBOrgRepos = ({ repos }) => (
    <div>
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Name</Table.HeaderCell>
                    <Table.HeaderCell>Language</Table.HeaderCell>
                    <Table.HeaderCell>Forks</Table.HeaderCell>
                    <Table.HeaderCell>Watchers</Table.HeaderCell>
                    <Table.HeaderCell>Created_at</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {repos.result.map((item, index) =>
                    <Table.Row key={index}>
                        <Table.Cell>
                            <Header as='h4' textAlign='center'>{item.full_name}</Header>
                        </Table.Cell>
                        <Table.Cell singleLine>
                            {item.language}
                        </Table.Cell>
                        <Table.Cell>
                            {item.forks}
                        </Table.Cell>
                        <Table.Cell>
                            {item.watchers_count}
                        </Table.Cell>
                        <Table.Cell>
                            {item.created_at}
                        </Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
        
    </div>
)

const OrgReposItem = ({item}) => (
    <div>
        {item.name}
    </div>
)

export default FBOrgRepos;