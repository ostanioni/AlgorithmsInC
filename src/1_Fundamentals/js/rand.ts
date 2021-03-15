import StdRandom from './utils/StdRandom.js'
import {randomInt} from 'crypto'

// console.log(StdRandom.uniform(2))

function heads() { 
  return randomInt(2)
  // return StdRandom.uniform(2)
}

function main(N=100, M=1000){

  let experiment = () =>{
    let count = 0
    for(let i=0; i<N; i++){
      if (heads() === 0)
        count++
    }
    console.log(count)
    // return count
  }
  for(let i =1; i<100; i++)  {
    experiment()
  }
  
  /*
  const experiments:number[] = Array(M+1).fill(0)
  experiments.forEach(experiment)

  let orderExperiments = Array(N+1).fill(0)
  
  for (let value of experiments) {
    ++orderExperiments[value]
  }

  for (let item of orderExperiments) {
    if (item === 0) continue
    console.log('*'.repeat(item/10))
  }*/
}
main()


/*
int main(int argc, char *argv[])
  { int i, j, cnt;
    int N = atoi(argv[1]), M = atoi(argv[2]), K = atoi(argv[3]);
    printf("first=%d, second=%d, third=%d", N, M, K);
    int *f =(int*) malloc((N+1)*sizeof(int));
    for (j = 0; j <= N; j++) f[j] = 0;
    for (i = 0; i < M; i++, f[cnt]++)
      for (cnt = 0, j = 0; j <= N; j++) 
        if (heads()) cnt++;
    for (j = 0; j <= N; j++) 
      {
        printf("%2d ", j);
        for (i = 0; i < f[j]; i+=10) printf("*");
        printf("\n");
      }
      free(f);
      printf("Hello\n");
      return 0;
 }
*/