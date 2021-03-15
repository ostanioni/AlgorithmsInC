import StdRandom from './utils/StdRandom.js'

const RAND_MAX = 100

function heads() { 
  return StdRandom.uniform(RAND_MAX) < RAND_MAX/2
}
function main(N=1, M=1000){
  let i: number, j: number, count: number
  
  const f = []
  for (j = 0; j <= N; j++) f[j] = 0
    
  for (i = 0; i < M; i++, f[count]++)
    for (count = 0, j = 0; j <= N; j++) 
      if (heads()) count++

  for (j = 0; j <= N; j++) {
    console.log(j);
    for (i = 0; i < f[j]; i+=10) console.log('*')
      console.log('\n')
  }
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