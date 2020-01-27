module Main where

import Prelude

import Effect (Effect)
import Effect.Console (log)

type Input = { 
  name :: String
}

type Output = {
  greeting :: String
}

run :: Input -> Effect Output
run { name } = do
  log $ "Received name " <> name
  pure { greeting : greeting }
    where 
      greeting = "Hello " <> name 
