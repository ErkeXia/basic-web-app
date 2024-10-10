export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  };
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My Andrew ID is exia."
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "Jason"
    );
  }

  if (query.toLowerCase().includes("plus")) {
    const addMatch = query.match(/What is (\d+) plus (\d+)/);
    if(addMatch){
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (x+y).toString();
    }
    return (
      "not match"
    );
  }

  if (query.toLowerCase().includes("minus")) {
    const addMatch = query.match(/What is (\d+) minus (\d+)/);
    if(addMatch){
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (x-y).toString();
    }
    return (
      "not match"
    );
  }

  if (query.toLowerCase().includes("multiplied")) {
    const addMatch = query.match(/What is (\d+) multiplied by (\d+)/);
    if(addMatch){
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (x*y).toString();
    }
    return (
      "not match"
    );
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest:")) {
    const addMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
    if(addMatch){
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      const z: number = parseInt(addMatch[3]);
      return Math.max(x,y,z).toString();
    }
    return (
      "not match"
    );
  }

  if (query.toLowerCase().includes("which of the following numbers are primes:")) {
    const addMatch = query.match(/Which of the following numbers are primes:: (\d+), (\d+), (\d+)/);
    if(addMatch){
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      const z: number = parseInt(addMatch[3]);
      return Math.max(x,y,z).toString();
    }
    return (
      "not match"
    );
  }

  return "";Which of the following numbers are primes:
}
