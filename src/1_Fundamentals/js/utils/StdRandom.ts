// numeric parameter
type numParam = number | null | undefined

class StdRandom {
  // Rearranges the elements of the specified subarray in uniformly random order.
  static shuffle(a: number[]|null=null): void|never {
  if (a == null) 
      throw new Error('[StdRandom.shuffle]: argument array is null or undefined') // NullPointerException
    let len = a.length
    for (let i = 0; i < len; i++) {
        let r = i + StdRandom.uniform(len-i)    // between i and n-1
        let temp = a[i]
        a[i] = a[r]
        a[r] = temp
    }
  }
  // Returns a random real number uniformly in [0, 1)
  static random(): number {
    return Math.random() //uniform()
  }
  static uniform(x?:numParam, y?:numParam): number {
    const len = arguments.length
    // Returns a random real number uniformly in [0, 1)
    if ( len === 0)
      return Math.random()

    // Returns a random integer or real uniformly in [0, x)
    if (len === 1) {
      if (Number.isSafeInteger(arguments[0]))
        return Math.floor(Math.random() * x)
      if (typeof x === 'number') 
        return StdRandom.uniform( 0.0, x )
    }
   
    // Returns a random integer uniformly in [x, y)
    if ( Number.isSafeInteger(x) && Number.isSafeInteger(y) )
      return x + StdRandom.uniform(y - x) 
    
    // Returns a random real number uniformly in [a, b)
    if ( (len === 2) && (typeof x === 'number') && (typeof y === 'number') )
      return x + StdRandom.uniform() * (y-x)
  }
  /* Returns a random boolean from a Bernoulli 
  distribution with success probability */
  static bernoulli(p: number): boolean | never { // double p
    // Returns a random boolean from a Bernoulli distribution 
    // with success probability 1/2.
    if (p === undefined) 
      return StdRandom.bernoulli(0.5)

    // NullPointerException
    if (p === null)
      throw new Error('[StdRandom.bernoulli]: argument array is null or undefined')
    
    if (!(p >= 0.0 && p <= 1.0))
    // IllegalArgumentException  
      throw new RangeError('[StdRandom.bernoulli]:Probability must be between 0.0 and 1.0')
    return StdRandom.uniform() < p;
  }
}

export default StdRandom