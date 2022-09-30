const mapToRepo = (responseRepo) => {
  return {
    name: responseRepo.Name,
    latestVersion: responseRepo.NewestImage?.Tag,
    tags: responseRepo.NewestImage?.Labels,
    description: responseRepo.NewestImage?.Description,
    platforms: responseRepo.Platforms,
    licenses: responseRepo.NewestImage?.Licenses,
    size: responseRepo.Size,
    vendor: responseRepo.NewestImage?.Vendor,
    lastUpdated: responseRepo.LastUpdated
  };
};

export { mapToRepo };
