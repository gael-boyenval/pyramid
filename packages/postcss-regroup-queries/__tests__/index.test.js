it('regroup media queries between comments', async () => {
  await global.run(
    `/* pyramid-block:start */
.tata {
  color: blue;
}
@media (min-width: 1024px) {
  .tata {
    color: blue;
  }
}
.toto {
  color: blue;
}
@media (min-width: 1024px) {
  .toto {
    color: blue;
  }
}
/* pyramid-block:end */`,
    `.tata {
  color: blue;
}
.toto {
  color: blue;
}
@media (min-width: 1024px) {
  .tata {
    color: blue;
  }
  .toto {
    color: blue;
  }
}`,
    {},
  );
});

it('should not regroup media queries outside of comments', async () => {
  await global.run(
    `/* pyramid-block:start */
.tata {
  color: blue
}
@media (min-width: 1024px) {
  .tata {
    color: blue
  }
}
.toto {
  color: blue
}
@media (min-width: 1024px) {
  .toto {
    color: blue
  }
}
/* pyramid-block:end */
.titi {
  color: blue
}
@media (min-width: 1024px) {
  .titi {
    color: blue
  }
}`,
    `.tata {
  color: blue
}
.toto {
  color: blue
}
@media (min-width: 1024px) {
  .tata {
    color: blue
  }
  .toto {
    color: blue
  }
}
.titi {
  color: blue
}
@media (min-width: 1024px) {
  .titi {
    color: blue
  }
}`,
    {},
  );
});

it('should regroup media queries by order of appearence', async () => {
  await global.run(
    `/* pyramid-block:start */
.tata {
  color: blue
}
@media (min-width: 320px) {
  .tata {
    color: blue
  }
}
@media (min-width: 680px) {
  .toto {
    color: blue
  }
}
@media (min-width: 320px) {
  .toto {
    color: blue
  }
}
@media (min-width: 1024px) {
  .toto {
    color: blue
  }
}
/* pyramid-block:end */`,
    `.tata {
  color: blue
}
@media (min-width: 320px) {
  .tata {
    color: blue
  }
  .toto {
    color: blue
  }
}
@media (min-width: 680px) {
  .toto {
    color: blue
  }
}
@media (min-width: 1024px) {
  .toto {
    color: blue
  }
}`,
    {},
  );
});

it('should restart group after finding a new start comment', async () => {
  await global.run(
    `/* pyramid-block:start */
.tata {
  color: blue
}
@media (min-width: 320px) {}
@media (min-width: 320px) {}
@media (min-width: 1024px) {}
/* pyramid-block:end */
/* pyramid-block:start */
.tata {
  color: blue
}
@media (min-width: 320px) {}
@media (min-width: 320px) {}
@media (min-width: 1024px) {}
/* pyramid-block:end */`,
    `.tata {
  color: blue
}
@media (min-width: 320px) {}
@media (min-width: 1024px) {}
.tata {
  color: blue
}
@media (min-width: 320px) {}
@media (min-width: 1024px) {}`,
    {},
  );
});

it('should sort media queries by size', async () => {
  await global.run(
    `/* pyramid-block:start */
.tata {
  color: blue
}
@media (min-width: 680px) {}
@media (min-width: 320px) {}
@media (min-width: 1024px) {}
/* pyramid-block:end */`,
    `.tata {
  color: blue
}
@media (min-width: 320px) {}
@media (min-width: 680px) {}
@media (min-width: 1024px) {}`,
    { sort: true },
  );
});

it('should not impact other at rules than media', async () => {
  await global.run(
    `/* pyramid-block:start */
.tata {
  color: blue;
  @supports (tututata) {}
}
@media (min-width: 680px) {}
@media (min-width: 320px) {}
@media (min-width: 1024px) {}
/* pyramid-block:end */`,
    `.tata {
  color: blue;
  @supports (tututata) {}
}
@media (min-width: 320px) {}
@media (min-width: 680px) {}
@media (min-width: 1024px) {}`,
    { sort: true },
  );
});

it('should work when atRules are defined inside a rule', async () => {
  await global.run(
    `/* pyramid-block:start */
.tutu {
    &--tata {
        color: blue;

        @media (min-width: 680px) { color: blue; }
        @media (min-width: 320px) { margin-bottom: 15px;}
        @media (min-width: 1024px) {color: yellow; }
        @media (min-width: 680px) {margin-top: 32px;}
    }
}
/* pyramid-block:end */`,
    `.tutu--tata {
    color: blue;
}

@media (min-width: 320px) {
    .tutu--tata {
        margin-bottom: 15px;
    }
}

@media (min-width: 680px) {
    .tutu--tata {
        color: blue;
    }
    .tutu--tata {
        margin-top: 32px;
    }
}

@media (min-width: 1024px) {
    .tutu--tata {
        color: yellow;
    }
}
`,
    { sort: true },
    'withScss',
  );
});
