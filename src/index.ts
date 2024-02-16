function test(): void {
  console.log(process.env.TEST_VALUE);
  console.error("THIS IS A TEST");
}

test();