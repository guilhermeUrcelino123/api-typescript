
function testeString2(){
    return "bla bla bla"
  }
  
  describe('teste', () => {
    test('dolor', () => {
      expect(testeString2()).toBe("bla bla bla");
    });
  });