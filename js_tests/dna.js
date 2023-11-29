// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  const pAequorFactory = (specimenNum, dna) => {
    return {
      _specimenNum: specimenNum,
      _dna: dna,
      _mutate() {
        const indexToMutate = Math.floor(Math.random() * this._dna.length);
        let newBase = returnRandBase();
        while (newBase === this._dna[indexToMutate]) {
          newBase = returnRandBase();
        }
        this._dna[indexToMutate] = newBase;
      },
      _compareDNA(otherAequor) {
        let commonCount = 0;
  
        for (let i = 0; i < this._dna.length; i++) {
          if (this._dna[i] === otherAequor._dna[i]) {
            commonCount++;
          }
        }
        return commonCount;
      },
      _willLikelySurvive() {
        let survival = 0;
        for (let i = 0; i < this._dna.length; i++) {
          if (this._dna[i] === "C" || this._dna[i] === "G") {
            survival++;
          }
          const survivalPercentage = (survival / this._dna.length) * 100;
  
          if (survivalPercentage >= 60) {
            return "Will likely survive.";
          } else {
            ("Probably won't survive.");
          }
        }
      },
    };
  };
  const the30 = () => {
    let studies = [];
    for (let i = 1; i < 31; i++) {
      let monster = pAequorFactory(i, mockUpStrand());
      studies.push(monster);
      let survive = monster._willLikelySurvive();
      while (!survive) {
        monster._dna = mockUpStrand();
        survive = monster._willLikelySurvive();
      }
      console.log(
        `Sample ${monster._specimenNum}: ${monster._dna.join(",")} ${survive}`
      );
    }
    return studies;
  };
  
  the30();
  
  // Create two instances of pAequorFactory
  const aequor1 = pAequorFactory(1, mockUpStrand());
  //const aequor2 = pAequorFactory(2, mockUpStrand());
  const survability = aequor1._willLikelySurvive();
  console.log(`Chance of survival: ${survability}`);
  
  // Use _compareDNA to compare their DNA
  //const commonCount = aequor1._compareDNA(aequor2);
  //console.log(`DNA in common: ${((commonCount / 15) * 100).toFixed(2)}%`);
  
  //const organism = pAequorFactory(1, mockUpStrand());
  //console.log("ex1 = ", organism._dna.join(" "));
  //const organism2 = pAequorFactory(1, mockUpStrand());
  //console.log("ex2 = ", organism2._dna.join(" "));
  //organism._mutate();
  //console.log("Mutated DNA:", organism._dna.join(" "));
  