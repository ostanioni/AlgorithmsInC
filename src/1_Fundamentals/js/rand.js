import { randomInt } from 'crypto';
function main(N = 100, M = 100) {
    const IntervalId = setInterval(() => { console.log('async'); }, 1);
    let experiment = () => {
        let count = 0;
        for (let i = 0; i < N; i++) {
            if (randomInt(2) === 0)
                count++;
        }
        // console.log(count)
        return count;
    };
    const orderExperiments = [];
    for (let j = 1; j < M; j++) {
        orderExperiments[experiment()] === undefined ?
            orderExperiments[experiment()] = 1 :
            orderExperiments[experiment()]++;
    }
    /*
    const gr = Array(20).fill(0)
    for(let k=0; k<20; k++ ) {
      gr.forEach(
  
      )
    }
    */
    const len = orderExperiments.length;
    for (let k = 0; k < len; k++) {
        console.log(' *'.repeat(orderExperiments[k] / 3));
    }
    clearInterval(IntervalId);
}
main();
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
