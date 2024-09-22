import { BrowserModule, enableDebugTools } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeSummaryComponent } from './components/recipe-summary/recipe-summary.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { EditNewRecipeComponent } from './components/edit-new-recipe/edit-new-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';

const routes:Routes=[
      {
        path: 'recipes',
        component: RecipeListComponent
      },
      {
        path: 'recipes/:recipe_id',
        component: RecipeDetailsComponent
      }
      ,
      {
        path: '', // used for redirection, when user doesn't enter any path.
        redirectTo: 'recipes',
        pathMatch: 'full'
      },
      {
        path: 'newRecipe',
        component: EditNewRecipeComponent
      }

    ];

@NgModule({
  declarations: [
    AppComponent,
    RecipeSummaryComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    EditNewRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
     ReactiveFormsModule,
    RouterModule.forRoot(routes, {enableTracing:true}),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(()=> getAuth ()),
    provideFirestore(()=> getFirestore()),
    provideStorage(()=>getStorage())
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
