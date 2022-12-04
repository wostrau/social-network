import profileReducer, {addPostActionCreator, deletePostAC} from './profile-reducer';
import React from 'react';

const testState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'Hello', likesCount: 11},
        {id: 3, message: 'Blah-blah', likesCount: 12},
        {id: 4, message: 'Yeah!', likesCount: 13},
        {id: 5, message: 'Yo!', likesCount: 14}
    ]
};

it('new post length should be corrected', () => {
    // 1. start data
    const action = addPostActionCreator('it-kamasutra.com');

    // 2. create new action
    const newState = profileReducer(testState, action);

    // 3. checking the expected result
    expect(newState.posts.length).toBe(6);
});

it('new post added message should be correct', () => {
    // 1. start data
    const action = addPostActionCreator('it-kamasutra.com');

    // 2. create new action
    const newState = profileReducer(testState, action);

    // 3. checking the expected result
    expect(newState.posts[5].message).toBe('it-kamasutra.com');
});

it('length of posts after deleting should be decremented', () => {
    // 1. start data
    const action = deletePostAC(1);

    // 2. create new action
    const newState = profileReducer(testState, action);

    // 3. checking the expected result
    expect(newState.posts.length).toBe(4);
});

it('length of posts should not be changed in case id is not correct', () => {
    // 1. start data
    const action = deletePostAC(10);

    // 2. create new action
    const newState = profileReducer(testState, action);

    // 3. checking the expected result
    expect(newState.posts.length).toBe(5);
});