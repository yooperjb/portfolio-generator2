const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);
// console.log("Process", process);
// console.log("process.argv", process.argv);

const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);