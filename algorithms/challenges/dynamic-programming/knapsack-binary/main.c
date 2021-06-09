#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int max(int a, int b) {
    if(a>b) return a;
    return b;
}

typedef struct
{
    int* val; 
    int* wt; 
    int n; 
    int W;
} Mochila;

void SetMochila(Mochila *M, int _val[], int _wt[], int _n, int _W)
{
    M->val = _val; M->wt=_wt; M->n=_n; M->W=_W;
}

void includeElement(Mochila m, int i, int j, int mat[2][m.W+1]) {
    mat[!!(i%2)][j] = (m.wt[i] <= j) ?
		max(m.val[i] + mat[!(i%2)][j-m.wt[i]], mat[!(i%2)][j])
		: mat[!(i%2)][j];
}

void dynamicProgramming(Mochila m,int mat[2][m.W+1]) {
    for (int i = 0; i < m.n; i++)
	{
		for (int j = 0;j <= m.W;++j)
	    {
			includeElement(m, i,j,mat);
		}
	
	}
}

int KnapSack(Mochila m)
{

	int mat[2][m.W+1];
    for (int i = 0; i < 2; i++){
       for (int p = 0; p < m.W+1; p++){
            mat[i][p] = 0;
       }
    }

	dynamicProgramming(m,mat);


	return mat[!(m.n%2)][m.W];
}

int main()
{
    unsigned int num_items;
    unsigned int orcamento;
    char ** nome;
    unsigned int * custo;
    unsigned int * lucro;
    
    scanf("%d %d\n", &num_items, &orcamento);
    
  
    nome  = (char**)  malloc(sizeof(char*) * num_items+1);
    custo = (unsigned int*)  malloc(sizeof(unsigned int) * num_items+1);
    lucro = (unsigned int*)  malloc(sizeof(unsigned int) * num_items+1);
    
  
    for(int i = 0; i < num_items; i++){
        nome[i] = (char*)  malloc(sizeof(char) * 20);
        fgets(nome[i], 20, stdin);
        scanf("%d %d\n", &(custo[i]), &(lucro[i]));
    }

    Mochila mochila;
    SetMochila(&mochila, lucro,custo, num_items, orcamento);
	printf("%d\n",KnapSack(mochila));

    for(int i = 1; i <= num_items; i++) free(nome[i]);
    free(custo); free(lucro); free(nome);
	
	return 0;
}

