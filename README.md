# simple-movie-recommender
![simple-movie-recommender demo](simple-movie-recommender.gif)

## 🙋‍♂️Overview
This is a reference implementation of Microsoft's Matchbox Recommender provided with ready-to-use Azure Machine Learning Studio experiment. This Recommender is then deployed as Azure Machine Learning Studio web service and requested via Azure Api Management. Simple web application written in React, which requests mentioned recommender is also included.

## 👨‍🔧 How to setup
1. Open [this experiment](https://gallery.cortanaintelligence.com/Experiment/Simple-Movie-Recommender-Pre-trained-1M-MovieLens) in Azure Machine Learning Studio
    * Run & Publish as web service
        * I strongly advise to train the model on [MovieLens 20M dataset](https://grouplens.org/datasets/movielens/20m/) as I did in the demo above
2. Create Azure API Management service
    * Create endpoint calling your Azure Machine Learning Studio published experiment
3. Clone & install frontend application from this repo
    * Fill in correct API & subscription keys inside `./frontend/.env` (follow `./frontend/.env_example`)
4. Run frontend application

## 🔗 Handy links
- Train the model yourself [Azure Machine Learning Studio experiment](https://gallery.cortanaintelligence.com/Experiment/Simple-Movie-Recommender-Model-MovieLens-1M-not-trained)
- Use [MovieLens 20M dataset](https://grouplens.org/datasets/movielens/20m/) for greater accuracy
