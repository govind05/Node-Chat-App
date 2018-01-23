const expect = require('expect');
const {
  Users
} = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Govind',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Lalit',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Monu',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    let users = new Users();
    let user = {
      id: '123',
      name: 'Govind',
      room: 'B99 fans'
    };
    let resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user])
  });

  it('should remove a user', () => {
    let res = users.removeUser('1');
    expect(users.users.length).toBe(2);
    expect(users.users).toNotInclude(res);
  });

  it('should not remove a user', () => {
    let res = users.removeUser('232');
    expect(res).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    let res = users.getUser('1');
    expect(res).toEqual({
      id: '1',
      name: 'Govind',
      room: 'Node Course'
    })
  });

  it('should not find user', () => {
    let res = users.getUser('23');
    expect(res).toNotExist();
  });

  it('should return name for node course', () => {
    let userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Govind', 'Monu']);
  });

  it('should return name for react course', () => {
    let userList = users.getUserList('React Course');
    expect(userList).toEqual(['Lalit']);
  });
});