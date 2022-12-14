import React from 'react';
import {create} from 'react-test-renderer';
import {Paginator} from './Paginator';

describe('Paginator component tests', () => {
    test('pages count 11 but should be showed only 10', () => {
        const component = create(<Paginator
            totalUsersCount={11}
            onClickPageChanged={() => {
            }}
            currentPage={1}
            pageSize={1}
        />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        const span = root.findAllByType('span');
        expect(span.length).toBe(10);
    });
    test('if pages count is more than 10 button NEXT should be displayed', ()=>{
        const component = create(<Paginator
            totalUsersCount={11}
            onClickPageChanged={() => {
            }}
            currentPage={1}
            pageSize={1}
        />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        const button = root.findAllByType('button');
        expect(button.length).toBe(1);
    })

})