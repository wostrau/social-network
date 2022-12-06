export const updateObjectInArray = (items: any, itemId: any, objPropName: any, newObjProps: any) => {
    return items.users.map((u: any) => {
        return u[objPropName] === itemId
            ? {...u, ...newObjProps}
            : u
    });
};

