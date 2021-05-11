(async () => {
  async function main(test: string): Promise<string> {
    return new Promise((resolve) =>
      setTimeout(() => resolve(test.toUpperCase()), 1500)
    );
  }

  const aux = await main('Hello World');

  console.clear();
  console.log(aux);
})();
