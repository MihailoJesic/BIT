`use strict`;

let condition = false;

try {
  if (!condition) {
    throw new Error(`❌Big Problem❌`);
  } else {
    console.log(`All's well`);
  }
} catch (error) {
  console.error(error);
} finally {
  console.log(`Still chugging along`);
}
