// @ts-nocheck
import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus
            status="I woke up this morning"
            profile={{}}
            updateUserStatusTC={() => {
            }}
        />);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe('I woke up this morning');
    });

    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus
            status="I woke up this morning"
            profile={{}}
            updateUserStatusTC={() => {
            }}
        />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test('after creation input should not be displayed', () => {
        const component = create(<ProfileStatus
            status="I woke up this morning"
            profile={{}}
            updateUserStatusTC={() => {
            }}
        />);
        const root = component.root;

        expect(() => {
            // eslint-disable-next-line testing-library/await-async-query
            const input = root.findByType('input');
        }).toThrow();
    });

    test('after creation span should contain correct status', () => {
        const component = create(<ProfileStatus
            status="I woke up this morning"
            profile={{}}
            updateUserStatusTC={() => {
            }}
        />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        const span = root.findByType('span');
        expect(span.children[0]).toBe('I woke up this morning');
    });

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus
            status="I woke up this morning"
            profile={{}}
            updateUserStatusTC={() => {
            }}
        />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        const span = root.findByType('span');
        span.props.onDoubleClick();
        // eslint-disable-next-line testing-library/await-async-query
        const input = root.findByType('input');
        expect(input.props.value).toBe('I woke up this morning');
    });
});